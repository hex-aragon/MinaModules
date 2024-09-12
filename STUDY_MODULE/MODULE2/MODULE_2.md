# Module 2 - Zero-knowledge Proofs With other primitives(다른 프리미티브를 사용한 영지식 증명)

ZK 증명에 들어가기 전에 몇 가지 기본 사항을 더 살펴보겠습니다. 암호화는 필수적이며 역사적으로 암호화의 출발점이므로 암호화가 무엇인지 살펴보겠습니다.

## Symmetric vs. Asymmetric Encryption (대칭 암호화 대 비대칭 암호화)

암호화는 데이터를 인코딩하는 데 사용되는 기술로, 올바른 암호 해독 키를 가지고 있는 사람만 데이터를 읽을 수 있습니다. 암호화에는 대칭형과 비대칭형의 두 가지 주요 유형이 있으며, 각각 다른 목적과 장단점을 가지고 있습니다.

**Symmetric Encryption(대칭 암호화)** - 단일 키 암호화라고도 하는 이 방식은 암호화와 복호화 모두에 동일한 키를 사용합니다. 가장 널리 사용되는 대칭 암호화 알고리즘은 고급 암호화 표준(AES)입니다.

**Asymmetric Encryption(비대칭 암호화)** - 공개 키 암호화라고도 하는 이 방식은 암호화용 키와 복호화용 키 한 쌍을 사용합니다. RSA 알고리즘은 가장 잘 알려진 공개 키 알고리즘 중 하나입니다.

- [Prime Numbers & RSA Encryption Algorithm - Computerphile](https://www.youtube.com/watch?v=JD72Ry60eP4)

## DLP-based Public-Key Cryptography(DLP 기반 공개 키 암호화)

1. **Discrete Log Problem (DLP, 이산로그 문제):** 이는 공개 키 암호화의 초석 문제이며 많은 키 교환 및 암호화 알고리즘의 기초가 됩니다. DLP에 대한 이해는 나머지 주제의 기초를 제공합니다.

   - [The Discrete Logarithm Problem - Khan Academy](https://youtu.be/SL7J8hPKEWY)
   - [Public key cryptography using discrete logarithms](https://www.di-mgt.com.au/public-key-crypto-discrete-logs-0.html)

2. **Diffie-Hellman Key Exchange:** 이는 이산 로그 문제를 기반으로 한 키 교환 프로토콜의 가장 초기에 실용적으로 구현된 것 중 하나입니다. 안전하지 않은 채널을 통해 안전한 통신을 구축하는 방법을 이해하는 것이 중요합니다.

   이 프로토콜은 두 당사자가 공유 비밀 키를 생성하여 메시지의 암호화 및 암호 해독에 사용할 수 있도록 함으로써 안전하지 않은 채널에서도 안전한 통신을 가능하게 한다는 점에서 중요한 의미를 갖습니다.

   - [Secret Key Exchange (Diffie-Hellman) - Computerphile ](https://www.youtube.com/watch?v=NmM9HA2MQGI)
   - [Diffie Hellman -the Mathematics bit- Computerphile](https://youtu.be/Yjrfm_oRO0w)
   - [Implementation of Diffie-Hellman Algorithm](https://www.geeksforgeeks.org/implementation-diffie-hellman-algorithm/)

For a deeper mathematical understanding, you can check [Hoffstein's Book Chapters 2, 6-6.5](https://books.google.com.ar/books/about/An_Introduction_to_Mathematical_Cryptogr.html?id=BHuTQgAACAAJ&source=kp_book_description&redir_esc=y)

## Hash Functions

해시 함수는 입력을 받아 고정된 크기의 바이트 문자열을 반환합니다. 현재 널리 사용되는 암호화 해시 함수는 **SHA-256**과 **포세이돈**이며, 특히 포세이돈은 산술 친화적인 연산을 위해 설계되어 블록체인의 특정 애플리케이션에 유용합니다.

좋은 해시 함수의 주요 특징은 데이터 보안과 무결성을 보장하는 [사전 이미지 저항](https://en.wikipedia.org/wiki/Preimage_attack), [2차 사전 이미지 저항], [충돌 저항](https://en.wikipedia.org/wiki/Collision_resistance)입니다. 블록체인 기술에서 해시 함수는 각 블록의 콘텐츠를 변경할 수 없는 고유한 표현을 생성하여 시스템의 불변성과 투명성에 기여합니다.

Explore these resources to further your understanding:

- [What Is SHA-256 Algorithm & How It Works](https://www.ssldragon.com/blog/sha-256-algorithm/)
- [How is SHA-256 used in blockchain, and why?](https://www.educative.io/answers/how-is-sha-256-used-in-blockchain-and-why)
- [Hash Function by Serious Cryptography Chapter 6](https://theswissbay.ch/pdf/Books/Computer%20science/Cryptography/SeriousCryptography.pdf)

## Merkle Trees

머클 트리는 미나 프로토콜에서 매우 필수적이며, 대부분의 사람들이 스마트 컨트랙트와 zkApp에 이 아름다운 도구를 사용합니다. 이 모든 이론적인 부분에 대해 조금만 더 기다려주세요 - 곧 여러분도 이 머클 트리를 사용하게 될 것입니다!

- [How Merkle Trees Enable the Decentralized Web! ](https://www.youtube.com/watch?v=3giNelTfeAk)
- [Merkle Tree by Mina Protocol](https://docs.minaprotocol.com/zkapps/o1js/merkle-tree)

## Digital Signatures

디지털 서명은 디지털 메시지나 문서의 무결성과 신뢰성을 보장합니다. 디지털 서명은 출처를 확인하고 콘텐츠가 변경되지 않았음을 확인할 수 있는 수단을 제공함으로써 디지털 커뮤니케이션의 신뢰를 유지하는 데 중추적인 역할을 합니다.

공개 키 암호화에서는 누구나 수신자의 공개 키로 메시지를 암호화할 수 있으며, 이는 수신자의 고유 키로만 해독할 수 있습니다. 또한 서명자는 자신의 개인 키를 사용하여 메시지에 대한 서명을 생성할 수 있으며, 이 서명은 특정 공개 키(이 경우 발신자)의 메시지인지 확인하는 데 사용할 수 있습니다.

공개 키 암호화에서는 누구나 수신자의 공개 키로 메시지를 암호화할 수 있으며, 수신자만 자신의 개인 키로 메시지를 해독할 수 있습니다. 반면 디지털 서명에서는 서명자가 자신의 개인 키를 사용하여 메시지에 대한 서명을 생성하면 누구나 서명자의 공개 키를 사용하여 서명의 유효성을 검사할 수 있습니다. 따라서 서명의 메시지는 공개되므로 암호화 약정과는 구별됩니다.

- [What are Digital Signatures? - Computerphile](https://www.youtube.com/watch?v=s22eJ1eVLTU)
- [Digital Signature Algorithm (DSA) - Cryptography ](https://www.youtube.com/watch?v=iS1nK4G6EtA)

Besides that, Mina protocol uses Schnorr signatures, which are known for simplicity and efficiency:

- [Schnorr Digital Signature](https://www.youtube.com/watch?v=r9hJiDrtukI)
