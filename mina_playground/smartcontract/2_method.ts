import {
  SmartContract,
  PrivateKey,
  PublicKey,
  Field,
  method,
  Provable,
} from "o1js";

class HelloWorld extends SmartContract {
  //메서드 내에서 o1js의 데이터 유형과 메서드를 사용하여 사용자 정의 로직을 정의할 수 있습니다.
  //나중에 메서드를 실행하는 방법(오프체인)을 배우게 됩니다. 메서드가 성공적으로 실행되었다는 증명을 생성하고,
  //해당 증명을 미나 네트워크에 전송하여 상태 변경이나 결제 등의 작업을 트리거합니다.
  //'성공적인 실행'이 무엇을 의미하는지 알아보려면 위의 예시에서 이 줄을 살펴보시기 바랍니다:
  //x.mul(2).assertEquals(5);

  @method myMethod(x: Field) {
    x.mul(2).assertEquals(5);
  }
}

Provable.log(HelloWorld);
