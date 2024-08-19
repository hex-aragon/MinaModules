# CYCLIC SUBGROUP

## 한글:

안녕하세요, 이번 에피소드에서는 순환 부분군(cyclic subgroups), 페르마의 소정리(Fermat's Little Theorem), 그리고 단위근(roots of unity)에 대해 논의할 것입니다.

먼저, 그룹이 무엇인지 복습해 봅시다.

그룹은 공집합이 아닌 집합 \( G \)로, 이 집합은 이항 연산(별표로 표시할 것입니다)을 갖습니다. 이항 연산은 \( G \)의 두 요소를 취해 \( G \)의 또 다른 요소를 생성합니다. 그룹의 정의는 다음과 같은 조건을 충족해야 합니다.

1. 연산 \( \* \)는 결합 법칙을 만족해야 합니다.
2. 연산 \( \* \)는 중성 원소(항등원)를 가져야 합니다. 즉, 어떤 원소 \( e \)가 있어 \( G \)의 모든 원소와 결합했을 때 그 원소 자신을 반환해야 합니다.
3. \( G \)의 각 원소는 연산에 대한 역원을 가져야 합니다. 즉, \( G \)의 각 원소 \( g \)에 대해, \( g \)와 결합했을 때 중성 원소를 반환하는 \( g \)의 역원 \( g^{-1} \)이 존재해야 합니다.

이제 부분군이 무엇인지 살펴보겠습니다.

부분군 \( H \)는 그룹 \( G \)의 부분집합으로, 다음 세 가지 조건을 만족해야 합니다:

1. \( G \)의 중성 원소는 \( H \)에 속해야 합니다.
2. \( H \)는 그룹 연산에 대해 닫혀 있어야 합니다. 즉, \( H \)에 속하는 두 원소의 연산 결과도 \( H \)에 속해야 합니다.
3. \( H \)는 연산에 대한 역원에 대해 닫혀 있어야 합니다. 즉, \( H \)에 속하는 원소의 역원도 \( H \)에 속해야 합니다.

이제 순환 부분군이라는 특정한 종류의 부분군에 대해 알아보겠습니다.

순환 부분군은 특정 원소의 거듭제곱으로 이루어진 부분집합으로 정의됩니다. 예를 들어, 원소 \( g \)가 주어졌을 때, \( g \)의 거듭제곱으로 이루어진 집합 \( \{ g, g^2, g^3, \ldots \} \)는 순환 부분군을 이룹니다.

우리는 이 순환 부분군이 실제로 \( G \)의 부분군이라는 것을 증명할 수 있습니다.

1. 먼저, 연산에 대한 닫힘성을 확인합니다. \( g^l \times g^m = g^{l+m} \)이므로 닫혀 있습니다.
2. \( G \)의 중성 원소 \( e \)는 \( g^0 \)이므로, 이는 순환 부분군에 속합니다.
3. 각 원소의 역원은 \( g^{-k} \) 형태로 존재하며, 이는 역시 순환 부분군에 속합니다.

따라서 이 집합은 \( G \)의 부분군이 됩니다.

이제 그룹 \( G \)의 원소 \( g \)의 순서(order)를 정의할 수 있습니다. 이는 \( g^k = e \)를 만족하는 가장 작은 자연수 \( k \)를 의미합니다. 순환 부분군의 크기는 이 원소 \( g \)의 순서와 같습니다.

라그랑주 정리에 따르면, 그룹의 부분군의 크기는 그룹의 크기의 약수입니다. 따라서 순환 부분군의 크기도 그룹 크기의 약수가 됩니다.

페르마의 소정리는 그룹 이론에서 매우 중요한 결과입니다. 만약 \( p \)가 소수이고 \( G \)가 \( p \)차 순환 그룹이라면, \( g^{p-1} = e \)입니다.

이 정리는 특히 유한 필드에서 매우 중요한 결과로 이어지며, 이는 암호학에서 중요한 역할을 합니다.

다음으로, 다항식과 복소수 체계에서의 단위근(roots of unity)에 대해 알아보겠습니다.

\( P(x) = x^4 - 1 \)이라는 다항식을 생각해 봅시다. 이 다항식은 실수 계수로 이루어져 있으며, 실근을 \( x = 1 \)과 \( x = -1 \)로 가집니다. 이 다항식의 근은 \( x^4 = 1 \)을 만족하는 네 가지 근인 1, -1, \( i \), -\( i \)입니다. 여기서 \( i \)는 \( i^2 = -1 \)을 만족하는 복소수입니다.

이 네 가지 근은 모두 \( t^4 - 1 = 0 \)을 만족하며, 이들은 4차 단위근(roots of unity)이라고 불립니다. 이러한 단위근은 순환 그룹을 형성하며, 이들은 모두 원의 형태로 배치될 수 있습니다.

이제 이 개념들을 활용해 수 이론 및 암호학에서 중요한 결과들을 도출할 수 있습니다. 예를 들어, 빠른 푸리에 변환(Fast Fourier Transform, FFT)이나 저차 다항식 테스트와 같은 기술들이 이러한 이론을 기반으로 작동합니다.

오늘은 여기까지입니다. 다음 비디오에서는 단위근을 보다 심도 있게 탐구하고, 빠른 푸리에 변환과 그 응용에 대해 다룰 것입니다. 함께해 주셔서 감사합니다. 다음 비디오에서 뵙겠습니다.

## 영문 :

foreign this uh episode we're gonna discuss
cyclic subgroups for much little theorem and something about uproots of unity okay
so um let's recall what a group is
that's the call what a group
so a group is a set G that is not empty
um equipped with
a an operation
which we're gonna denote for the time being just star that is binary
so star takes two elements of G and produces
also another element of G such that
first of all star is associated
second um star admits
a neutral element
that is there's an element e
such that when we combine it with neg in the set we get the same G
and a third
Each G and G admits
and inverse
respect to the star
this means that there's for each G there's a g tilde such that when we
combine it with G what we get is the neutral element so notation usually goes like
rotation the inverse for G is usually denoted G
to the minus one okay we just call it g inverse
um so a group is actually a set G together with this operation which is
associated admits a neutral element and
closed undertaking inverses okay so what do we mean by a subgroup
so if this is a group
what is a sub
okay so we're gonna give a gentle definition of a subgroup
let h
be a subset of G
will say that H is
a subgroup RT if
first of all the neutral element of G belongs to H
second of all um h is closed
under the star operation so if we have an operation defined in G then
H should be closed under that operation this means that if H1 and H2 belong to H
then the combination of H1 and H two should
also belong to H so we summarize that by saying that H is
closed under the operation of the group and
thirdly age is closed
under they can emphasis
this means that whenever little age belongs to the set h then the inverse respect to the
operation start also belongs okay so that's what a subgroup is
okay this is it's not any subset it's a subset that needs to fulfill certain
compatibility conditions uh with respect to the group operation okay so it's not
just any subset uh we're gonna take a look at a very
specific kind of a subgroup and we're gonna restrict ourselves to uh
multiplicative notation but we're just simply simplifying the notation for a star okay this is not
anything fancy rotation uh for the rest
of this video we're just gonna use the symbol Little
Dot for the verb operation okay so we're gonna simply talk about
multiplication in in general okay so let's do this
let's take J and G
not equal to the identity element okay and
um let's consider
let's consider a finite Group G
and um what about
the set of powers of G let's call it h and we're gonna
be taking a look at g to the kth power or k
is a natural number so this is a collection equal G that
contains G D Squared t to the third power G to the fourth
power and so on okay so we're going to prove a theorem about
h H is not any subset H is a subgroup of G and is
in fact a very important subgroup subject so theorem
H is a subgroup
G Okay so this is the theorem that we wanna
uh prove now so let's keep proof
okay uh obviously uh
by definition uh H is closed
under multiplication
and by this we mean that uh G to the L times G to the m is obviously
J to the L plus m so this is fulfilled since
if L is a natural number m a natural number their addition is also a natural number
so H is closed under multiplication
so this is fine okay so this is verify
so we're left with two things to check first of all that the identity element
belongs in each and also that an H is closed undertaking
inverses so let's show that H contains the identity element
let's show that the Identity or the neutral element
of G belongs to H okay so uh how do we do that okay we are
going to uh need to use certain property of the natural numbers and the fact that
g is a finite group so let's do that
let's see how it goes so G find it
it's a final set this implies that h
is also finite set
since age is a subset
so h is a finite set
this actually means that The Collection G
squared e to the third power and so on is not infinite
all these Powers cannot be all different
of G cannot be
all different okay so H is a finite set
so this is what's important here G is find it then
ages also fine so what does this tell us okay
let's use uh sub properties of the natural numbers to
our advantage let's call um
r the set of natural numbers
such that uh G to VM equals to G to the J
for some natural number
lesser banana okay
so this is this is a set of natural numbers for which uh
G to the N equals one of the uh powers of G that appeared before okay
so uh for what you have seen h INE it
means that R is none
empty and since R is a non-empty subset
and since R is a non-empty subset of n
fact of n being well ordered
implies that R has a first
so there's a first natural such that
G to that natural number equals g to some other natural number lesser banana
so there exists
a minimal and not such that
G to the m naught equals G to the J naught
with one
uh Plus or equal to J naught less than enough
Okay so what we see now
is that this means that H has a form G
G squared third and so on G to the J naught and then
and this is it these are all the different powers
that appear in H the next power of G that would be J G to
the and not is actually this guy but we can say more about this
maybe we can be more specific about the shape of age
so we know the G to the
G to the J naught so since these are elements of G we can
also have the inverse uh G to the J naught
so we can multiply both sides
and we'll get this but now the inverse of G to the J naught
G to the minus J naught
and this is simply G to the m naught minus J naught
and since J naught is lesser than a naught then
this subtraction is actually a natural number
so this means that
he actually belongs to each because e is of the form G to some
natural number okay so this is proven that uh
H belongs that e belongs to H okay so there's even
more okay because this very line tell us tells us more
Okay so a further look
so this line if we multiply by G
Ives us this equality and this is obviously G to the m naught minus J naught plus
one so this natural number
is that that when we um raise a g to this power we get G to the power of one
so this below this means that M naught minus J naught plus one belongs
to R R consisted of the uh natural numbers
which uh produce repetitions okay so M naught
being the smallest
element of R gives that M naught
should satisfy this inequality so if we work this out then we get that
J naught is equal equal or less than one and at the same time
one was um lesser or equal to J naught since J
naught is a natural number both of these conditions say that j9 is actually one
so what does this say about age age consists of the powers of g j to the
first power to the squared cubed and so on
then we get all the powers all the way to G to the m naught
plus one and then what happens is if we want to take
account J to them no this is J to the first power
so if I place J to the m naught I'm gonna be repeating
there's one guy so
this is all the set of powers of
G but furthermore what we have learned is that g to the m naught minus one is
actually the identity element because that's what we said before so this one last guy
is actually the identity element
okay this shows that H has
age has M naught minus one elements
and this is very important okay H has M naught minus one components
all right so we're only left to prove the third condition for H to be
a subgroup we
only [Music] um now to prove
that H is closed
under uh taking inverses
and that's easy because if I had a power of a g
say G to the uh k
then producing the inverse of G is going to be easy
because when you actually compute this G to the K plus M naught minus 1 minus K
this is g to the m naught minus 1 and this is the identity element
and all this works
because this is a natural number so the inverse of
G okay is actually
this power okay so this says that h
is indeed a subgroup
of G okay all this uh was possible by the fact
that n was well ordered okay and the finance of G
so now that we have proven this theorem there's a lot to say about age and a lot
to say about the interaction between the elements of H and G so first of all a definition
G
G an element of a group and uh the order of G
is the minimal
uh K belonging to and such that
G to the k equals the identity element the order is um
the smallest power of G that equals the neutral
element of G and observation
if age is the collection of the powers
of G then what we have is that the order of H
equals the order of the element
okay and
definition uh subgroups
um the shape of H
are called cyclic
groups in this case h is a cyclic subgroup
of J all right and um
observation another observation uh by LaGrange
branches caused theorem
the number of elements in h divides the number of elements of G
Okay so not only age has a finite number of elements but
the number of elements of H must divide the number of elements of its uh mother
uh Group G okay uh so this is a very important
uh theorem okay so Corollary
if the order of a group is a prime
then G
processes no non-trivial
suburb that is when the order of G is prime it
has only two subgroups the identity element by itself and all of G it has no
intermediate subgroups all right so that's an important
observation okay so we're gonna try to put this into
[Music]
some context when does uh this situation arise
for instance uh
a natural number regular or equal to two and uh let's define
a the uh quotient
Z over n times set this is what we usually call
said sub m this is the uh set of residues or equivalence classes
of remainders modulo and
so this forms remember
that a is a ring
under um the Golden's glass addition
class of M time plus the class of n equals the class of the sum
and also the class of M times the class of n equals m times n
okay so this is a ring under this two operations
all right so what we are now going to be interested in is
um considering the invariable elements for
multiplication let's now consider
the units of a this is the classes
such that uh and has an inverse
respective multiplication
Okay so this uh subset
together with multiplication is a group
we'll call it g okay so the units with uh class
multiplication is actually root and we can do stuff with this G as we did in
the previous section of the class now clearly the number of elements of G that is the
amount of units is actually 5 VM with a Phi
you can take this as the definition of the alert function if you will Okay so
we know that for so for any
class belonging to the units of a then we know that the
order H must divide the order of G that is
this divides Phi of n
okay the multiplicative order of an invertible class must divide Phi of n
okay so let's do some computations with some fixed numbers so we get a hold of this
for instance
Let's Take N equal to 4. so this is the collection
of these classes and we are going to need the units of
C4 the variable elements
so one is an invariable element two is not an invariable element because 2
times 2 is 0 so that means that the class of two is our divider of zero so
that cannot be an invertible element so same with three because uh well
three times three that's nine
and that's uh congruent to one modulo four
so three the class of three has a class of three yes its own inverse
Okay so here what we have is that Phi of four is
the number of elements in this sentence and that is two
okay and if you take a look then the units of
C4 have a prime number of elements so this
group has no trivial no non-trivial subgroups
as a matter of fact this can be considered as three and plus
of 3 squared we say that this group G is cyclic and
is generated by three
because all the elements of G are actually powers of class of three this guy being
exactly this guy so we have shown with an example that
cycling groups we we have plenty of cyclic groups where used
a very small example with n equals to four so there are cases in which there are more
okay let's do one more let's take
let's take say um n equal to six
Okay so this is the collection of classes
okay and we are gonna need the units
of this ring so we need to discard all the uh zero
devices so this this one these two guys are discarded
uh uh then this is also discarded
because the class of three times the class of four that's the class
of 12 and that's the class of six that's zero okay so all
these guys are discarded as well as six so the units of uh
set six are actually lesson one and the class of five
and this again is the group generated by the class of
five okay so uh observation
class of uh K is a variable
definitely if K is equal Prime to n
is to have no common factors with n
right now we will see that the order of an
element and the interaction with the other the order of the group uh in this
context that we're talking about about this ring um gives actually a very well-known and
important result in Elementary number Theory which is called the ferments
little theorem okay so um let's go back to the bigger context and
let G be a finite group
G and element of G that is not the identity element
the theorem G to the order of the group equals the
identity element Okay so
what does this mean okay let's approve of this uh let H be the subgroup generated by G
and then by laurenti's
theorem we know that uh the order of H divides the order of G
that is uh there's
an integer okay such that
the number of elements of G equals K times the number of elements of
H so this means that this is K times the
order of G because by definition the number of elements of H is actually the order of G
so this means that g raised to the number of elements of G
that's G to the K times the order of G
and this is just G to the order of G
o to the uh kth power and by definition this is the identity
to the K power and this is simply the identity element
okay so this is a very important result and in the context that we were just
discussing uh gives a very powerful tool to start
study number Theory okay so I say Corollary
so in the context of G being the units uh said to the end
this says that g to the order of G which is pi of n
is actually the identity element but it's that is it is congruent to one
modulo and this is the Euler format
theorem
okay then another Corollary
let P be a prime
so first of all um Phi p is actually
P minus one since every integer uh greater than zero and lesser than B's
actually go Prime with P because P has no fat known trivial factors then
what we have here is that g to the P minus 1 is actually congruent to one
module p and this is what it's called formats
little okay
so this is a very important result and this also gives
Prairie in service p
there's an equality we have
the equality
G to the P minus one equals
to one modulo p which is also sustained
modulo p and this is valid
for o g in in suddenly of course this one g
needs to be different from the identity it's not to be one
if we work this one out this says that J to the P minus g equals
zero in the set of classes
so every element of
this field is a root
of a polynomial P of t let's use a different letter
uh F of t to the
P minus t okay so we have characterized they find a field
as the set of roots of a certain polynomial okay so the theory of groups is very rich
okay and even in this very simple cases in a general scenario if we go a little
bit more deep then what we have is this wonderful set
of results stemming from number Theory and then we're gonna be taking a look at
different um approaches to feel field
so let's study uh more groups
uh uh so let's start with an example let's
take a look at the polynomial P of x to the fourth power minus one and we're
going to be taking a look at P of X as a polynomial uh
we're real coefficients okay so
um what do we know about the roots of a p
we know about the roots
of P okay we know that there's at least one real root
that is p of one is actually zero and we also know that P of minus
one is also zero
right so P has two real roots
he has at least two real fruits
and similar effect P of x can be factored
as this all right
so this is a factorization of P of X over R of x
is a factorization which uses all polynomials with radial
coefficients and and uh since
this has no real roots
[Music] degree 2 then this Factor laying right
here is an irreducible Factor
a reducible factor over R of x
so P has exactly B has exactly
two roots in R and its factorization includes a
polynomial degree 2 which is irreducible over R of x
so what if we wanted all of the roots of P then we know that there's a field that
we can construct which actually has at least one more root of P
we know
how to construct a field
f containing
uh a non-real
root of let's remember how to do that okay let's
go Q of X this irreducible factor that
appears in the factorization of P and uh let's take
F to be the quotient of R of x
by this polynomial okay so
since Q is irreducible
then f is a field
containing R of course and also
in which X is a root
of Q of t t squared plus one when viewed
as a polynomial with coefficients in F
okay coefficients in F okay so Q evaluated at X
is x squared minus 1 and this is zero
in this new field remember for r
or r big X is a formal symbol
it's not an element of the field but in F now X is an element of the field
okay so this is crucial r
X is not element
of the field but
in F X is an element of the field
and this is very important thing to notice so we are able to
construct a field f that now contains
a root of Q thank you but
um so cute
has X as a root
so we can divide this means
that we can divide
Q by the polynomial
T minus X so let's uh gather a q which uh Q of t
plus was t squared plus one and we're going to divide by T minus X so how do
we do that by or very Google friend rufini's
proof so we lower the first coefficient we
multiply and then we add
and remember that x squared plus 1 is actually 0 in F
so this means that these are the coefficients of Q and these are the coefficients
of the quotient this means that Q of t
can be factored as uh t
plus X times T minus X
so one of the things that we notice is that X belongs to F minus X also belongs to f
so these are two polynomials that belong to
F of t those polynomials with coefficients in F
all right and not only that not only that
but also
since uh
x squared plus one is zero
right enough we have that x squared
is equal to -1
so if we multiply both uh sides by x x
cubed is minus X so
what do we see here that X cubed is actually the other root
x cubed is the other root
of Q of t not only X
not only X is a root of Q
but x cubed is the other Q
so this is a very important fact
when adding a root
of Q to our base field
are we also added
the other
so if you want to be taking a look at this
adding
tax gives actually um
yes okay so this means that when Q is an
irreducible polynomial and we add to the base field one of the roots we are also
adding the other roots so we say uh
gives all the roots uh two
and this all these roots are conjugate to one another
when Q is the radius
all these roots are called
conjugate okay so in this new field f x
is an element of the field and
X cubed gives minus X
squared gives minus one and if you take a look at x to the
fourth then what you have is X
squared minus 1 and this is minus minus one and this is one so this is interesting
one X x squared and X4
are all the roots
of peak because x square was a root of
p x to the fourth power is a root of p and then x and x cubed were the roots of
Q so this collection
consists of all the roots of P
traditionally
R of x when we take the quotient for
um let's say right Q This is called C and the symbol X will stand
with the letter i this new element has this um
property that when you square it you get minus one
so you can visualize f the field that we were talking about as
the complex numbers okay and there's a graphic this position of the roots
okay so take a for instance I look at the
in a circle all the roots are
one minus one I and minus I
okay so this is the group of fourth roots of unity
all of these elements satisfy
the equation t to the four minus one equals zero or
t to the fourth power equals one all of these elements
satisfy this equation and we view them as elements of C
another thing that we have seen is that with simply with X we were able to describe all of them so this is what we
call A Primitive root of your name I is a primitive
uh uh root
of order for able to generate
the fourth roots of unity one I minus 1 minus I
it's actually this
cyclic group because it's generated by I
all right so
there's an interaction between what we know from groups
and what we have known we have learned in the context of fields what we have
done here with P of x polynomial with real coefficients can be
done when the base field is a final field and that is very much uh
important because in this context complex numbers are gonna give us a lead
in how to represent polynomials
not by by their coefficients but by their values
if the polynomial has degree n then n plus one points evaluating the
polynomial in N plus one points will represent the polynomial as a list of numbers as a list of n plus one numbers
well the question is how to choose those points to evaluate the polynomial
well one way of doing it is using complex numbers
and not only is using complex numbers but using roots of unity when we use
roots of unity to evaluate polynomials we enter the dimension of
the fast Fourier transform and when we were talking about roots of
unity or order a power of two then the process of codifying a
polynomial as well as some numbers uh will avoid us
um will save us from doing too much work usually the the way of codifying a
polynomial as a list of results takes N squared operations the
polynomial is of degree n when we use roots of unity of Power of
Two then it becomes a recursive problem and
the complexity is n Times log n so that is much lower
okay so I wanted to talk about this now because in the following in the
following videos we're gonna delve deeper into roots of unity viewed as
subsets of the complex numbers and after we do that we're going to
discuss phosphoria transform and it's inverse and then we're gonna see what do we need to do that with a finite field
okay once we get to know that we'll be able to
um talk about low degree testing which is a very important thing in
cryptography okay so this is it for now hope you enjoyed the video and uh we'll
be back soon okay see you in the next one foreign

## 원본 링크:

https://www.youtube.com/watch?v=UIhhs38IAGM&list=PLFX2cij7c2PynTNWDBzmzaD6ij170ILbQ&index=5
