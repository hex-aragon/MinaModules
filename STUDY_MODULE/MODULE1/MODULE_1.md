# Module 1 - Intro to Math of ZK

모듈 1에 오신 것을 환영합니다. 아직 모듈 0을 확인하지 않으셨고 블록체인에 익숙하지 않으시다면 모듈 0을 살펴보시기 바랍니다. 블록체인이 무엇인지 이미 알고 계시다면 블록체인의 수학적 기초를 살펴볼 준비가 되신 것입니다. 이 모듈은 영지식 증명에 사용되는 수학, 실제로는 암호학과 블록체인 전반에 사용되는 수학에 익숙해지는 것을 목표로 합니다. 시작해보겠습니다!

Let’s get started!

## Mathematics of Cryptography

o1js와 미나 프로토콜에 대해 알아보기 전에 블록체인과 영지식 증명의 기본 수학적 기초를 살펴볼 필요가 있습니다. 다음은 이를 배울 수 있는 몇 가지 리소스입니다. LambdaClass에서 촬영한 동영상이 있으니 관심이 있으시면 재생 목록을 확인해 보세요. 또한 Zk, 스나크 등이 포함된 블로그도 유익한 정보를 얻을 수 있습니다:

- [Finite Fields](https://www.youtube.com/watch?v=MAhmV_omOwA&list=PLFX2cij7c2PynTNWDBzmzaD6ij170ILbQ&index=9)
- [Cyclic Subgroup](https://www.youtube.com/watch?v=UIhhs38IAGM&list=PLFX2cij7c2PynTNWDBzmzaD6ij170ILbQ&index=4) - OPTIONAL -
- [An introduction to Mathematical Cryptography Chapter 1](https://books.google.com.ar/books/about/An_Introduction_to_Mathematical_Cryptogr.html?id=BHuTQgAACAAJ&source=kp_book_description&redir_esc=y)
- [Mina Book Chapters 1-6 ](https://o1-labs.github.io/proof-systems/introduction.html)
  - [Fast Fourier Transform explained visually](https://www.youtube.com/watch?v=h7apO7q16V0) - OPTIONAL -
- [Moonmath Manual for ZK Chapters 4, Finite Fields ](https://github.com/LeastAuthority/moonmath-manual/releases/latest/download/main-moonmath.pdf) - supplementary -

## Exercises

[Introduction](https://www.minaplayground.com/tutorial/01-introduction/01-o1js) part may be useful for you to see how is field elements are defined and used in o1js.

Moreover, you can take a look at [o1js](https://github.com/o1-labs/o1js) repository on github to see how primitives are defined. Since it is written in typescript & javascript, it is easy to read and test the code.

// Open for comments: i don't see necessity for elliptic curve part for anyone that is not going to develop on core level.
// Besides that, i am not sure about adding exercises for types like Circuit or adding Foreign Field, even though they are nice to haves. Maybe, they can be added to advanced exercises, hence people who are willing to write infra level applications like verifier/provers.

## Elliptic Curves

First part is over huh? Now it is time to see some more underlying mathematical concepts: Elliptic Curves. Cryptography of blockchains heavily based on Elliptic Curve Cryptography:

- [Elliptic Curves](https://www.youtube.com/watch?v=F3zzNa42-tQ)
- [Programming Bitcoin Chapters 2-3 ](https://digilib.stekom.ac.id/assets/dokumen/ebook/feb_d82be9cf1cb52e2b294a82275318a5c8235444eb_1654093256.pdf)
- [Serious Cryptography Chapter 11-12](https://theswisessbay.ch/pdf/Books/Computer%20science/Cryptography/SeriousCryptography.pdf)
