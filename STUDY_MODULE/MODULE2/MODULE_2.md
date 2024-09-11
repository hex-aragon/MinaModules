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

A hash function takes an input and returns a fixed-size string of bytes. **SHA-256** and **Poseidon** are popular cryptographic hash functions in our context, with Poseidon specifically designed for arithmetic-friendly operations, benefiting certain applications in blockchains.

The primary characteristics of a good hash function are [preimage resistance](https://en.wikipedia.org/wiki/Preimage_attack), second preimage resistance, and [collision resistance](https://en.wikipedia.org/wiki/Collision_resistance), ensuring data security and integrity. In blockchain technology, hash functions create an unalterable, unique representation of each block's content, contributing to the immutability and transparency of the system.

Explore these resources to further your understanding:

- [What Is SHA-256 Algorithm & How It Works](https://www.ssldragon.com/blog/sha-256-algorithm/)
- [How is SHA-256 used in blockchain, and why?](https://www.educative.io/answers/how-is-sha-256-used-in-blockchain-and-why)
- [Hash Function by Serious Cryptography Chapter 6](https://theswissbay.ch/pdf/Books/Computer%20science/Cryptography/SeriousCryptography.pdf)

## Merkle Trees

Merkle Trees are very essential on Mina Protocol, most of the people use that beautiful tool for their smart contracts and zkApps. We ask for a little bit more patience about all this theoretical parts - soon you will be using this Merkle Trees too!

- [How Merkle Trees Enable the Decentralized Web! ](https://www.youtube.com/watch?v=3giNelTfeAk)
- [Merkle Tree by Mina Protocol](https://docs.minaprotocol.com/zkapps/o1js/merkle-tree)

## Digital Signatures

Digital signatures ensure the integrity and authenticity of digital messages or documents. By providing a means to verify the origin and confirm that the content has not been altered, digital signatures play a pivotal role in maintaining trust in digital communications.

In Public Key Cryptography, anyone can encrypt their message with receiver's public key, which can be decrypted by the reciever's priate key only. Besides that, signer can generate a signature for a message using their private key, which can be used to validate that message is from some specific public key (sender, in this case).

In Public Key Cryptography, anyone can encrypt their message with the receiver's public key, and only the receiver can decrypt the message with their private key. In digital signatures, on the other hand, if a signer generates a signature for a message using their private key, anyone can validate it using the signer's public key. Therefore, the message of the signature is made public, which distinguishes it from cryptographic commitments.

- [What are Digital Signatures? - Computerphile](https://www.youtube.com/watch?v=s22eJ1eVLTU)
- [Digital Signature Algorithm (DSA) - Cryptography ](https://www.youtube.com/watch?v=iS1nK4G6EtA)

Besides that, Mina protocol uses Schnorr signatures, which are known for simplicity and efficiency:

- [Schnorr Digital Signature](https://www.youtube.com/watch?v=r9hJiDrtukI)
