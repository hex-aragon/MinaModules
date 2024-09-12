# Module 4 - Mina Protocol

이 모듈에서는 o1js와 미나 프로토콜에 익숙해지기 시작할 것입니다. 이제 모듈 0에서 보셨듯이 블록체인의 크기는 다양한 이유로 증가합니다. 미나 프로토콜의 경우 크기가 22KB로 일정하기 때문에 그렇지 않습니다! 왜 그런지 이해해 봅시다.

- [Mina Protocol explained (A very useful Playlist)](https://www.youtube.com/watch?v=GvwYJDzzI-g&list=PLItixFkgfjYFfKnYicUqYrsSCIU1SgD4L&index=1)
- [ZkApps - which are simply Zero-knowledge based Dapps](https://docs.minaprotocol.com/zkapps)

이제 미나에 대해 이해했으니 이제 o1js 자료 학습을 시작할 수 있습니다:

- [o1js Introduction](https://docs.minaprotocol.com/zkapps/o1js)
- [Tutorials for ZkApps](https://docs.minaprotocol.com/zkapps/tutorials)

코드베이스를 확인하고 유형이 어떻게 구현되었는지 살펴보고 무언가를 구축해 보시기를 적극 권장합니다. 이것이 미나에서 스마트 컨트랙트를 이해하는 가장 좋은 방법입니다. o1js의 기초를 체계적으로 배우려면 [미나 플레이그라운드](https://www.minaplayground.com/) 튜토리얼을 이용하면 됩니다.

o1js에는 강력한 기능을 제공하는 몇 가지 백본 클래스와 함수가 있습니다. o1js 자료를 보셨다면 MerkleTree, ZkProgram, SmartContract와 같은 클래스를 이미 보셨을 것입니다. 중요한 클래스들을 다시 살펴봐도 나쁘지 않을 것 같습니다. 이 부분을 통해 미나 스마트 컨트랙트가 다른 체인과 어떻게 다른지 설명해 보겠습니다.

### ZkProgram

ZkProgram을 사용하여 재귀 프로그램을 만들 수 있습니다. 이 프로그램에서는 메서드를 정의하고 이 프로그램에서 재귀 단계를 (무한대로!) 실행할 수 있습니다. 무한한 이유는 모든 단계가 끝나면 프로그램이 증명으로 '압축'되기 때문입니다. ZkProgram을 통해 각 단계에서 실행이 검증되고 지금까지의 실행 증명이 다음 단계로 전달됩니다(어떤 의미에서는 증분 검증 가능한 계산과 같습니다).

```typescript
import { SelfProof, Field, ZkProgram, verify } from "o1js";

const AddOne = ZkProgram({
  name: "Example-Program",
  publicInput: Field,

  methods: {
    baseCase: {
      privateInputs: [],

      async method(publicInput: Field) {
        publicInput.assertEquals(Field(0));
      },
    },

    step: {
      privateInputs: [SelfProof],

      async method(publicInput: Field, earlierProof: SelfProof<Field, void>) {
        earlierProof.verify();
        earlierProof.publicInput.add(1).assertEquals(publicInput);
      },
    },
  },
});

const { verificationKey } = await AddOne.compile();

console.log("proving base case...");
let proof = await AddOne.baseCase(Field(0));

let ok = await verify(proof, verificationKey);
console.log("Is baseCase proven? : ", ok);

let proof1 = await AddOne.step(Field(1), proof);
let ok2 = await verify(proof1, verificationKey);
console.log("Is step1 proven? : ", ok2);

let proof2 = await AddOne.step(Field(2), proof1);
let ok3 = await verify(proof2, verificationKey);
console.log("Is step2 proven? : ", ok3);
```

여기서 사용되는 SelfProof는 Proof 클래스의 확장된 클래스입니다. Proof 클래스와 크게 다르지 않으며 SelfProof는 ZkProgram 내에서만 사용됩니다. SelfProof는 ZkProgram에 비공개 입력으로 주어지지만, ZkProgram은 PublicOutput과 PublicInputs도 얻을 수 있습니다. 이 용어는 이전 모듈에서 설명한 [Zk 회로](https://medium.com/web3studio/simple-explanations-of-arithmetic-circuits-and-zero-knowledge-proofs-806e59a79785)에서 유래한 것입니다. 이 비공개/공개 입력의 의미는 누구에게도 개인 정보를 숨기고 각 단계를 증명하고 최종 증명을 다른 당사자에게 보내면 어디서든 확인할 수 있다는 것입니다.

정의된 메서드는 비동기 함수여야 합니다.

ZkProgram은 누구나 사용할 수 있도록 오프체인 계산을 제공합니다. 미나 네트워크에 ZkProgram 증명을 정산하고 싶다면, 스마트 컨트랙트의 메서드에 최종 증명을 주고 거기서 검증하면 됩니다. 따라서 스마트 컨트랙트에 대해 이야기하기에 좋은 단계입니다.

**연습 시간**: 단계별 계산은 재귀를 명확히 하는 데 사용되는 기본 알고리즘을 떠올리게 할 수 있습니다. 피보나치 수열과 비슷하지 않나요? 피보나치 수열(알고리즘)은 ZkProgram을 사용하여 구현할 수 있습니다. 피보나치 수열의 341253번째 단계가 필요하지만 컴퓨터의 연산 능력이 충분하지 않다고 가정해 봅시다. 다른 사람이 계산해 주기를 원하는데, 고전적인 경우라면 그 결과를 신뢰해야 합니다. 하지만 ZkProgram과 재귀적 Zk 알고리즘을 사용하면 상대방이 증명과 함께 결과를 보내주면, 여러분은 그 결과가 정말 여러분이 요청한 숫자인지 ~~믿고~~ 확인할 수 있습니다.

> Try to implement it with ZkProgram.

### Smart Contracts

이 단계는 미나 프로토콜의 스마트 컨트랙트를 이해하는 데 매우 중요합니다. 이더리움의 스마트 컨트랙트를 생각해 보세요. 여러분이 컨트랙트를 작성하고 이더리움에 배포하면 상호작용이 일어나면 EVM이 작업을 처리합니다. 미나에서는 그렇지 않습니다. 우선, 스마트 컨트랙트는 배포 전에 zk Circuits에 컴파일되기 때문에 스마트 컨트랙트 코드를 '실행'하는 VM이 존재하지 않습니다. 사용자가 스마트 컨트랙트와 상호 작용하면 기본 zk 회로가 실행되고 상태 전환에 대한 증명이 생성됩니다. 올바른 전환에 대한 증명은 검증으로 이어지고 네트워크는 새로운 상태로 업데이트됩니다.

따라서 사용자/개발자는 자신의 데이터를 비공개로 유지하고 스마트 컨트랙트에 필요한 데이터만 제공해야 합니다.

다음은 스마트 컨트랙트의 예시입니다(배포 시 zkApp이라고도 함):

```typescript
import {
  SmartContract,
  Poseidon,
  Field,
  State,
  state,
  PublicKey,
  Mina,
  method,
  UInt32,
  AccountUpdate,
  MerkleTree,
  MerkleWitness,
  Struct,
} from "o1js";

const doProofs = true;

class MyMerkleWitness extends MerkleWitness(8) {}

class Account extends Struct({
  publicKey: PublicKey,
  points: UInt32,
}) {
  hash(): Field {
    return Poseidon.hash(Account.toFields(this));
  }

  addPoints(points: number) {
    return new Account({
      publicKey: this.publicKey,
      points: this.points.add(points),
    });
  }
}
// we need the initiate tree root in order to tell the contract about our off-chain storage
let initialCommitment: Field = Field(0);
/*
  We want to write a smart contract that serves as a leaderboard,
  but only has the commitment of the off-chain storage stored in an on-chain variable.
  The accounts of all participants will be stored off-chain!
  If a participant can guess the preimage of a hash, they will be granted one point :)
*/

class Leaderboard extends SmartContract {
  // a commitment is a cryptographic primitive that allows us to commit to data, with the ability to "reveal" it later
  @state(Field) commitment = State<Field>();

  @method async init() {
    super.init();
    this.commitment.set(initialCommitment);
  }

  @method
  async guessPreimage(guess: Field, account: Account, path: MyMerkleWitness) {
    // this is our hash! its the hash of the preimage "22", but keep it a secret!
    let target = Field(
      "17057234437185175411792943285768571642343179330449434169483610110583519635705"
    );
    // if our guess preimage hashes to our target, we won a point!
    Poseidon.hash([guess]).assertEquals(target);

    // we fetch the on-chain commitment
    let commitment = this.commitment.get();
    this.commitment.requireEquals(commitment);

    // we check that the account is within the committed Merkle Tree
    path.calculateRoot(account.hash()).assertEquals(commitment);

    // we update the account and grant one point!
    let newAccount = account.addPoints(1);

    // we calculate the new Merkle Root, based on the account changes
    let newCommitment = path.calculateRoot(newAccount.hash());

    this.commitment.set(newCommitment);
  }
}

type Names = "Bob" | "Alice" | "Charlie" | "Olivia";

let Local = await Mina.LocalBlockchain({ proofsEnabled: doProofs });
Mina.setActiveInstance(Local);
let initialBalance = 10_000_000_000;

let [feePayer] = Local.testAccounts;

let contractAccount = Mina.TestPublicKey.random();

// this map serves as our off-chain in-memory storage
let Accounts: Map<string, Account> = new Map<Names, Account>(
  ["Bob", "Alice", "Charlie", "Olivia"].map((name: string, index: number) => {
    return [
      name as Names,
      new Account({
        publicKey: Local.testAccounts[index + 1], // `+ 1` is to avoid reusing the account aliased as `feePayer`
        points: UInt32.from(0),
      }),
    ];
  })
);

// we now need "wrap" the Merkle tree around our off-chain storage
// we initialize a new Merkle Tree with height 8
const Tree = new MerkleTree(8);

Tree.setLeaf(0n, Accounts.get("Bob")!.hash());
Tree.setLeaf(1n, Accounts.get("Alice")!.hash());
Tree.setLeaf(2n, Accounts.get("Charlie")!.hash());
Tree.setLeaf(3n, Accounts.get("Olivia")!.hash());

// now that we got our accounts set up, we need the commitment to deploy our contract!
initialCommitment = Tree.getRoot();

let contract = new Leaderboard(contractAccount);
console.log("Deploying leaderboard..");
if (doProofs) {
  await Leaderboard.compile();
}
let tx = await Mina.transaction(feePayer, async () => {
  AccountUpdate.fundNewAccount(feePayer).send({
    to: contractAccount,
    amount: initialBalance,
  });
  await contract.deploy();
});
await tx.prove();
await tx.sign([feePayer.key, contractAccount.key]).send();

console.log("Initial points: " + Accounts.get("Bob")?.points);

console.log("Making guess..");
await makeGuess("Bob", 0n, 22);

console.log("Final points: " + Accounts.get("Bob")?.points);

async function makeGuess(name: Names, index: bigint, guess: number) {
  let account = Accounts.get(name)!;
  let w = Tree.getWitness(index);
  let witness = new MyMerkleWitness(w);

  let tx = await Mina.transaction(feePayer, async () => {
    await contract.guessPreimage(Field(guess), account, witness);
  });
  await tx.prove();
  await tx.sign([feePayer.key, contractAccount.key]).send();

  // if the transaction was successful, we can update our off-chain storage as well
  account.points = account.points.add(1);
  Tree.setLeaf(index, account.hash());
  contract.commitment.get().assertEquals(Tree.getRoot());
}
```

코드를 따라가 보겠습니다. 모듈 2에서 머클 트리가 무엇인지 배웠습니다. 여기서 머클위트니스는 현재 상태의 계정이 트리에 속해 있는지 확인하기 위해 리프 노드(이 경우 계정 해시)의 경로를 제공합니다. 보시다시피 스마트 컨트랙트에는 하나의 상태 변수가 있으며, 이는 데코레이터 *@state*에 의해 선언됩니다. 현재 스마트 컨트랙트는 8개의 상태 필드를 저장할 수 있습니다. 보시다시피, 스마트 컨트랙트는 개발 환경에서 변수를 가져오는 초기 커밋으로 초기화됩니다(설정한 값은 체인으로 직접 전송되지 않고 스마트 컨트랙트의 컴파일에 zk 회로에 사용됩니다.) 기억하세요.

다음 단계에서는 스마트 컨트랙트에 대한 메서드를 작성합니다. 메서드는 @method 선언으로 정의되며 비동기식이어야 합니다. guessPreimage 메서드는 컨트랙트의 커미션 값과 추측한 해시값을 비교합니다. 물론 예제 파일이기 때문에 여기에는 'target' 변수를 명시적으로 넣었습니다.

또한, `let commitment= this.commitment.get()` 줄을 온체인에서 커미션의 값을 '가져오는' 메서드라고 생각하여 혼동하지 마시기 바랍니다. 앞서 설명했듯이 스마트 컨트랙트는 zk 회로에 컴파일되고 데이터는 사용자/개발자에 의해 제공됩니다. 따라서 리더보드 클래스는 환경으로부터 '커미션 값'을 가져올 수는 있지만, 체인으로부터 어떠한 데이터도 가져오지 않습니다.

또한 `initialCommitment = Tree.getRoot()` 줄에서 초기 커미트먼트가 머클 트리의 루트인 리더보드의 초기 커미트먼트로 설정되고 일부 리프 노드에 사용자 계정의 해시값이 설정되어 있는 것을 볼 수 있습니다.

리더보드 컨트랙트가 초기화되고 배포되면 공개 키와 검증 키가 있는 zkApp을 갖게 됩니다. 이 검증 키는 비공개로 유지해야 하며, 그렇지 않으면 일부 악의적인 당사자가 이를 사용하여 동일한 검증 키와 공개 키를 사용하여 악의적인 컨트랙트를 배포할 수 있습니다. 물론, [권한](https://docs.minaprotocol.com/zkapps/writing-a-zkapp/feature-overview/permissions#types-of-permissions) 부분에서 보셨듯이 권한을 불가능()으로 설정하여 인증키가 변경되지 않도록 할 수 있습니다.

모든 zkApp은 특정 계정 유형이므로 ` AccountUpdate.fundNewAccount(feePayer).send({ to: contractAccount, amount: initialBalance, });` 부분처럼 자금을 보유할 수 있습니다. AccountUpdate 클래스는 허용된 경우 계정을 업데이트할 수 있게 해줍니다.
물론 사용자가 컨트랙트와 상호작용할 때 상태 변경/업데이트가 발생합니다. 이러한 변경은 트랜잭션을 통해 이루어지며, 앞서 설명한 것처럼 체인에서 상태 전환에 대한 올바른 증명을 생성하는 것입니다.

함수에서 사용자 계정, 사용자가 변경/상호 작용하고자 하는 트리의 인덱스, 사용자 리프의 증인(확인을 위한 경로 포함)을 가져옵니다. 추측한 숫자가 맞으면 사용자는 포인트와 계정 변경 상태를 얻습니다. 이 계정 상태는 머클트리의 한 잎이므로 트리의 루트가 변경됩니다.

보시다시피, 검증을 위해 필요한 데이터는 매우 적습니다. 트리의 현재 루트 상태만 있으면 원하는 데이터를 검증할 수 있습니다.

**연습**: examples/zkapp/escrow 폴더에 있는 에스크로 파일을 참조하세요. 입금과 출금을 위한 기본적인 메커니즘을 작성해 보세요. 또한, 2030년 이전에는 토큰을 출금할 수 없도록 하는 등 출금에 시간 제한을 추가할 수도 있습니다!
다른 zkapp 파일도 자유롭게 사용해 보세요.
