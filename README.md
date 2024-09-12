# Template for Mina education modules

> Feel free to add/edit resources
> Also, it is obvious that some o1js materials is needed. From the beginnings to the advanced structures (Fields to ZkPrograms etc.) should be covered and added.

### Todo of Modules

- [x] Module 0: Blockchain basics
  - [x] What is Blockchain, Smart Contracts
  - [x] Technical explanation of Blockchain with Bitcoin example
- [x] Module 1: Mathematics for cryptography
  - [x] Finite Fields and other heavenly tool
  - [x] Elliptic Curves and their applications
- [x] Module 2: Other Primitives for non- Web3/ZK people
  - [x] Asymmetric/Symmetric/DLP based cryptography
  - [x] Hashing / Merkle Tree
  - [x] Digital Signatures
- [x] Module 3: Introduction to Zk Snarks
  - [x] What are zkSNARKs
- [x] Module 4: What is Mina and O1js Basics
  - [x] What is / not Mina Blockchain is.
  - [x] Advanced/Low-level o1js api
  - [ ] Exercises

If you want to see example codes, you can check examples folder of o1js repo. Also, you can clone this repository and play with the example codes in the examples folder. They are taken from the o1js repo and will be kept updated. Besides that, there will be more increasing number of exercises/examples in this repo. After cloning the repo, do the following:

```bash
npm install
```

You can compile typescript codes in examples via:

```bash
npx tsc
```

Compiled Javascript codes are in build folder. To execute files:

```bash
node build/examples/file_you_want.js

```

Mina O1js 문서

- https://docs.minaprotocol.com/zkapps/zkapp-development-frameworks

o1js github

- https://github.com/o1-labs/o1js

Protokit

- o1js를 wrapping해서 쓰기 쉽게 만들어둔 개발 프레임워크
- https://protokit.dev/

미나 재단 그랜트 프로젝트 리스트

- 상세 페이지 들어가면 Github 링크들 있습니다.
- https://zkok.io/

미나 재단 공식 교육 자료

1. 이론 관련 내용 (https://github.com/saitunc/MinaModules)
2. 실습 관련 내용 (https://minamodules.gitbook.io/modules)
