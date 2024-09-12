한글:

알고리즘의 두 가지 클래스:

본질적으로 유용한 알고리즘 (예: DFS, BFS)
순수하게 아름다운 알고리즘 (예: 하노이 탑)

FFT는 두 클래스 모두에 속하는 알고리즘입니다:

실용적이면서도 아름다운 알고리즘
현대 기술(무선 통신, GPS 등)에 매우 중요함

다항식 곱셈 문제를 통해 FFT 설명:

계수 표현과 값 표현의 두 가지 다항식 표현 방법 소개
값 표현을 사용한 다항식 곱셈의 장점 설명

FFT의 핵심 아이디어:

다항식을 짝수항과 홀수항으로 분리
복소수 도메인으로 확장
n차 단위근 사용

FFT 알고리즘 구현:

재귀적 접근 방식
기본 케이스와 재귀 케이스 설명

역 FFT (Inverse FFT):

보간법을 위한 역 FFT 소개

영어 원문:
the world of algorithms is vast but we
can often split them into two distinct
classes
the first class is those that are
inherently useful think of your standard
graph algorithms like dfs or bfs
these algorithms show up all over the
place they are efficient
and as a result we like to understand
them the second class of algorithms we
study are ones that are just
purely beautiful think of the first time
you saw the incredibly simple recursive
implementation of towers of annoy
if you have a soul you feel a sense of
wonder a sense of awe
at the elegance of such an algorithm it
happens to not
actually be that useful or efficient as
a matter of fact
but we still study it just as we like to
read a work of fiction
it inspires us and motivates
out-of-the-box thinking
today i want to talk about an algorithm
that rightfully belongs
in both classes and my personal favorite
algorithm
the fast fourier transform the fast
fourier transform or fft
is without exaggeration one of the most
important algorithms created in the last
century
so much of the modern technology that we
have today such as wireless
communication
gps and in fact anything related to the
vast field of signal processing relies
on the insights of the fft
but it's also one of the most beautiful
albums you'll ever see
the depth and sheer number of brilliant
ideas that went into it is just
astounding it's easy to miss the beauty
aspect of the fft since
it's often introduced in fairly complex
settings that require a lot of
prerequisite knowledge such as the
discrete fourier transform
time domain to frequency domain
conversions and much more
and to be fair to get a full
appreciation of the applications of the
fft you can't really avoid any of these
ideas
but i want to do something a little
different we'll take a discovery based
approach to learning about the fft in a
context that you are all
familiar with polynomial multiplication
the way i see the structure of this
video it's all about starting with some
common ground
and then slowly asking questions that
will hopefully prompt you to discover
the truly ingenious ideas behind the
fast fourier transform
all alright let's get started
the setup here is simple we're given two
Polynomial Multiplication
polynomials
and want to find the product our task
will be to design an efficient algorithm
for this problem
mathematically we know one algorithm to
multiply polynomials by repeatedly
applying the distributive property all
of you have perhaps instinctively been
applying this algorithm since
any algebra class before we try this
idea though
the first question we have to address is
representation of polynomials in a
computer
the most natural way to represent them
is through coefficients
where we map coefficients to lists
it helps to arrange our coefficients in
the following order mainly because now
the coefficient of the kth index is
mapped to the coefficient of the kth
degree term
we will refer to this representation as
the coefficient representation of
polynomials
in general given 2d degree polynomials
the product will have a degree
of 2 times d and the running time of
this algorithm
if we actually went about implementing
it with the most natural distributive
property approach
will be o of d squared since each term
in polynomial a
will have to be multiplied by all terms
in polynomial b
the question now is can we do better
Polynomial Representation
the first really clever idea comes from
thinking about polynomials a little bit
differently
to see the key insight here let's take a
look at one of the simplest polynomials
a degree one polynomial or a linear
function
we can represent any line with exactly
two coefficients
one for the degree zero term and one for
the degree one term
the key part that makes this
representation valid is that every
representation has a one-to-one mapping
to a unique line
what other representations of a line
have this property
there are actually several reasonable
representations but the one that we are
going to use
is the two-point representation we know
from geometry that any line can be
represented by two distinct points
and turns out that there is a neat
extension of this for general
polynomials which i will state here
any polynomial of degree d can be
uniquely represented by d
plus one points for example if i gave
you three random points
this means that there is exactly one
quadratic function that goes through
all three of these points if i give you
four points
there is exactly one cubic function that
goes through all these points
this statement is perhaps a little
surprising so deserves a proof
suppose i give you d plus one unique
points of a d degree polynomial p of x
we want to show that for these set of
points there's only one set of
coefficients
so if we actually evaluate our
polynomial at each of these points
we get the following set of system of
equations
whenever you have a system of equations
writing it as a matrix vector product is
almost always helpful for analysis
one nice property of this matrix is that
if each of our original points is unique
as it is in this case the matrix will
always be invertible
the easiest way to show this is by
calculating the determinant
which you will find is nonzero but i'll
link a nice linear algebraic proof
of this fact in the description as well
for those interested
anyways what this means is that for
every set of points
there exists a unique set of
coefficients and consequently
a unique polynomial
taking a step back what this means is
that there are actually two ways
to represent polynomials of degree d the
first of which is the coefficient
representation
and the second with just d plus one
points which we'll call
the value representation
a nice property of using the value
representation is multiplication of
polynomials is much easier
let's say i ask you to multiply these
Value Representation Advantages
two polynomials a of x
and b of x we know the resulting
polynomial c
of x will be of degree four so we'll
need five points
to uniquely represent the product what
we can now do is take five points from
each of the two polynomials
and then simply multiply the function
values one by one to get the value
representation of the product of the two
polynomials
following our earlier rule there's only
one degree 4 polynomial that passes
through these points
that polynomial happens to be the
following in the coefficient
representation
and this is indeed the product of our
original a of x
and b of x polynomials with the
multiplication operation
being performed using the value
representation we've now reduced the
time for multiplication from our
original d squared operations to the
order
of only degree d operations
okay so let's propose a plan for an
improvement to polynomial multiplication
Polynomial Multiplication Flowchart
we are given two polynomials in the
coefficient representation of degree d
each we know multiplication is faster
using the value representation so what
we'll do is evaluate each of these
polynomials at 2d plus 1
points multiply each of these points
pairwise to get the value representation
of the product polynomial
and then finally somehow convert the
value representation
back to the final coefficient
representation
this is the grand plan but there are
several pieces of the puzzle we haven't
figured out
what we're missing is really some sort
of magic box
that could take polynomials in the
coefficient representation
and convert them to the value
representation and then vice versa
that magic box my friends and trust me
it is truly magical
is the fast fourier transform let's
first focus
on taking polynomials from the
coefficient representation
to the value representation which we
will call evaluation
Polynomial Evaluation
we have a degree d polynomial and we
want to evaluate the polynomial at
n points where n is some number greater
than d
plus one let's think about the most
straightforward way to do this
we can pick n random x coordinates and
simply calculate
the respective y coordinate this works
but when we deconstruct what's actually
going on here we run
into our old foe each evaluation will
take
of d operations making this method run
in o of
n times d time which ends up being o of
d squared to evaluate all
endpoints so back to where we started
can we find a way to optimize this
let's try to simplify the problem let's
say instead
of considering a general polynomial we
wanted to instead just evaluate a simple
polynomial
like p of x is equal to x squared at
eight points the question now
is which points should we pick is there
any set of points when knowing the value
of one point
immediately implies the value of another
in fact there is if we pick the point x
equals one
we immediately know the value of the
point x equals negative one
similarly if we pick x equals two we
automatically know x equals negative two
will have the same value extending this
idea the key property we want here is
that our eight points should be positive
negative pairs
the reason this works is due to the
property of even functions where
a function evaluated at negative x is
going to equal the function evaluated at
positive x okay but then the next
immediate question
is what about functions like x cubed
does the same trick work
it actually kind of does but with one
caveat
each positive x value will have the same
value as the negative x value
but with the sign flipped so in these
two cases of
odd and even degree single term
polynomials instead of evaluating eight
individual points we can actually get
away with evaluating exactly
four positive points from which we
immediately know
the value of the respective negative
points
let's see if we can extend this idea to
a more general polynomial
taking inspiration from our early
exploration let's split our polynomial
into even
and odd degree terms if we factor an x
from the odd degree terms we end up
having two new polynomials where these
new polynomials have only even degree
terms
let's actually give these polynomials
formal names the first representing the
even terms
and the second representing odd terms
after factoring out
x this fact allows us to recycle a lot
of computation between positive and
negative pairs of points
a bonus fact is that since these even
and odd polynomials are functions of x
squared they are polynomials of degree
two which is a much simpler problem than
our original degree five polynomial
generalizing these observations if we
have an n minus one degree polynomial
that we want to evaluate at n points we
can split the polynomial
into even and odd terms with these two
smaller polynomials now having degree n
over two minus one
so how do we evaluate these polynomials
with half the degree
of our original polynomial well what's
beautiful here
is that this is just another evaluation
problem but this time
we need to evaluate the polynomials at
each of our original inputs
squared and this works out nicely since
our original points were positive
negative pairs
so if we originally had n points we now
only end up having n over two points
this is starting to smell like the start
of a recursive algorithm
let's take a look at the bigger picture
we want to evaluate a polynomial p of x
at endpoints where the endpoints are
positive negative paired
we split the polynomial into odd and
even degree components
where we now have two simpler
polynomials of degree n over two minus
one
that only need n over two points to
evaluate
once we recursively evaluate these
smaller polynomials we can then go
through
every point in our original set of
endpoints and calculate the respective
values
by utilizing the relationship between
the positive and negative paired points
this gives us the value representation
of our original polynomial
if we can get this to work this means we
have an o of n
log n recursive algorithm since the two
recursive sub problems
have half the size of the original
problem and take
linear time to evaluate the endpoints
this would be a huge
improvement from our earlier quadratic
running time but there is
one major problem can you spot the issue
the problem occurs at the recursive step
the entire scheme relies on the fact
that the polynomial will have positive
and negative paired points
for evaluation this works at the top
level but the next level we are
evaluating n over two points where each
point
is a squared value these all end up
being positive so the recursion breaks
so then the natural question is can we
make these new set of points positive
negative paired
some of you may already see it but this
actually leads the third
absolutely ingenious idea behind the fft
the only way this is possible is if we
expand the domain
of possible initial points to include
complex numbers
for special choice of complex numbers
the recursive relation works perfectly
where every subsequent set of points
will contain
positive negative pairs what possible
set of initial endpoints has this
property
this is a hard question and to answer it
we're going to do a little bit of
reverse engineering with an example
Which Evaluation Points?
let's say we have a degree 3 polynomial
which requires at least
n equals 4 points for its value
representation
these points need to be positive
negative pairs so we can write them as
x1 negative x1 x2 and negative x2
we know that the recursive step will
require that we evaluate the odd and
even splits of the polynomial at two
points
x1 squared and x2 squared now the key
constraint here
is that for the recursion to work these
two points
also have to be positive negative pairs
so we have an equivalence between
x2 squared and negative x1 squared
at the bottom level of the recursion
will have a single point
x1 to the power 4. now what's nice
is that we get to choose these points
let's see
what happens if we pick our initial x1
to be 1.
this means two of our initial points are
1 and negative
1 which at the next level of recursion
means that x1 squared and negative x1
squared
also have to be 1 and negative 1
respectively
and at the bottom layer we have only one
point which
ends up being 1. now the question
becomes
what x2 should we choose so that when we
square
x2 we end up with negative 1. the answer
to that
is the complex number i which means that
the four points that we need to evaluate
this polynomial at r
1 negative 1 i and negative i
an alternate perspective to what we just
did here is that we essentially just
solved the equation
x to the power of 4 equals 1. since at
the bottom layer of the recursion the
value of any of our original points
to the power of four was one we know
this equation has four solutions
all of which are encompassed by a
special set of points called the fourth
roots of unity let's see if this
generalizes
if given a degree 5 polynomial we'll
need n
is greater than or equal to 6 points
since our cursive method is splitting
each problem in half
it's convenient to just pick a power of
two so let's pick n equals eight
now what we need to do is to find eight
points that are positive negative paired
such that each of these points when
raised to the eighth power
is equal to one we see that the right
points are the
eighth roots of unity generalizing this
to any d
degree polynomial what we will do is
pick n is greater than or equal to d
plus one points such that n is the power
of two
and the points that we should choose are
the nth roots of unity
this fact deserves a little bit more
explanation
why does this work before we answer that
question let's formalize a few things
Why Nth Roots of Unity?
the nth roots of unity are the solution
to the following equation
and they are best visualized as equally
spaced points on the unit circle
the angle between these points is 2 pi
over n
with this fact a nice way to compactly
write these points
is with complex exponential notation
through euler's
formula one standard way to define the
roots of unity is by defining this omega
term as e to the power of two pi
i over n and then what this allows us to
do
is define individual roots of unity
quite compactly
here are some examples
so now when we say we want to evaluate a
polynomial at the nth roots of unity
what that really means is we want to
evaluate it at omega to the power of 0
omega to the power of 1 so on and so
forth until omega
to the power of n minus 1.
[Music]
so going back to our original question
of why evaluating the polynomial p of x
at the nth root of unity
works for our recursive algorithm there
are two key properties at play ear
for one our original set of points are
positive negative paired
where for the jth root omega to the
power of j
omega to the power of j plus n over 2 is
going to be the corresponding pair
now in our recursive step we will be
squaring each of these points and
passing them on to the even and odd
degree
polynomials this is what happens when we
square our original
n roots of unity this reveals the second
key property of the nth roots of unity
when we square the nth roots of unity we
end up with the n
over two roots of unity which are also
positive negative paired and are just
the right number of points for the two
new polynomials of half the degree
this same pattern holds at every level
of the recursion until we end up with
just one point
how beautiful is that
FFT Implementation
all right we are now ready to outline
the core fast fourier transform
algorithm
the fft will take in a coefficient
representation of a degree
n minus one polynomial where n is the
power of two
we will define omega as e to the power
of 2 pi
i over n to allow us to define roots of
unity easily
the first case we need to handle is the
base case which is going to be
when n is equal to 1. all this means is
that we are evaluating the polynomial at
one point
a recursive case is two calls to the f
of t one
on even degree terms and one on odd
degree terms
the intention is that these polynomials
are now half the degree
of our original polynomial so they only
need to be evaluated at n
over 2 roots of unity assuming the
recursion works
the output of these calls will be the
corresponding value representation of
these even and odd degree term
polynomials which we will label as
y e and y o now on to the tricky part
which
is to take the output from these
recursive calls and combine them
to get the value representation of our
original degree
n minus 1 polynomial we saw earlier that
the key
idea was to use the relationship between
positive and negative pairs but now we
have to slightly modify this logic for
our roots of unity
inputs as a quick note yes i did modify
the indexing to zero indexing because
we're getting ready to write some code
we know the j-th input point will
correspond to j
root of unity which results in the
following relationship
we also saw earlier that the paired
point negative omega to the power of j
is equal to omega to the power of j plus
n over 2 due to the properties of the
roots of unity
using this fact we can modify the second
equation as follows
and lastly one more fact that's nice is
that the j
index in our y e and y o list correspond
to the
even and odd polynomials evaluated at
omega to the power of 2 times j what
this allows us to do is rewrite our
equations as follows
which makes it much easier to implement
code as mentioned this part
is tricky so i encourage you to take
your time and verify that each of these
steps
is indeed true the final step in the fft
algorithm is to then
return the values of a polynomial p
evaluated at the nth roots of unity
let's now translate this outline logic
into code
our function f of t will take an input p
which is the coefficient representation
of a polynomial p
we first define n as the length of p and
we will assume that n
is a power of two just to be clear there
are
implementations of the f t that can
handle n not being a power of two
but those are way more complicated the
power of two cases encompass the core
ideas of the algorithm
we now handle the base case which is
just a matter of returning our original
p
this makes sense since we only have one
element making p
a degree zero polynomial or constant
otherwise we define omega as we have
outlined and then proceed with the
recursive step
the first part of the recursive step
requires splitting the polynomial into
even
and odd degree terms which is quite easy
to do then we recursively call our f of
t
function on these polynomials that now
have half the degree of our original
polynomial
we denote the outputs as y e and y o as
we have done
in the outline now it's time to put this
all together
we initialize our output list which will
contain the final value representation
then for all j up to n over 2 we
calculate the value representations as
we have outlined
after populating all values in our list
we then return that list
and that's the fft overall pretty crazy
how all the ideas we talked about end up
coming together in 11 lines of truly
elegant code
let's now take a larger look at our
original problem of polynomial
multiplication and see where we are
we now have a way to convert coefficient
representations to value representations
efficiently using the fft
so now the only missing piece is the
reverse process of converting from value
representations to coefficient
representations
which is formally called interpolation
Interpolation and Inverse FFT
this is where things get really wild
on the surface the idea of reversing
evaluation feels like a significantly
harder task
let's take a step back and look at this
problem from another perspective
evaluation and interpolation are closely
connected
and as we saw earlier we can express
evaluation
as a matrix vector product
we have a vector of coefficients
multiplied by a matrix of our evaluation
points to give us the value
representation
now in the fft algorithm the kth
evaluation point
was a corresponding route of unity which
allows us to rewrite the matrix vector
product as follows
this particular matrix has a special
name the discrete fourier transform
or dft matrix in most textbooks and
references
the fft at its core is an algorithm for
calculating these types of matrix vector
products
efficiently polynomial evaluation at the
roots of unity happens to be one case
where this type of matrix vector product
shows up
so that's why we can use the fft anyways
the nice fact about the fft and
evaluation in this context is that
interpolation is much easier to
understand
interpolation requires inversing this
dft matrix
for interpolation we are given a value
representation of our polynomial and we
want to find the coefficient
representation
which means we have to multiply the
value representation by the
inverse of the dft matrix so let me show
you what the inverse of this matrix
looks like
i'm purposely skipping a lot of
important linear algebra facts here
since that would be an entirely
different video
but given that this is the inverse
matrix what stands out to you
it's really quite amazing but this
inverse matrix looks
almost the same as our original dft
matrix
in fact the only difference is that
every single omega in our original dft
matrix
is now just replaced with omega to the
power of negative one
with a normalization factor of one over
n
this indicates a potential to reuse the
fft logic for interpolation since the
matrix structure is basically the same
let's formalize the suspicion by doing a
direct comparison
in evaluation which involved the fft we
are given a set of coefficients and
evaluate the polynomial at the roots of
unity to get a value representation
this involved the following matrix
vector product where we define
omega as e to the power of 2 pi i
divided by n
looking at interpolation we now want to
define what is formally called the
inverse fft algorithm the inverse fft
will take a value representation where
each value was evaluated at the roots of
unity and gives
you a set of coefficients for the
original polynomial
basically reversing what the original
fft did as we just saw this requires
multiplying by the inverse of the dft
matrix
we noted that each omega in our original
dft matrix now corresponds to 1 over n
times omega to the power of negative 1.
now the punch line here
is that what this means is we can define
the inverse f of t
as the same fft function but now
called on the value representation with
omega defined as 1 over n
times e to the negative two pi i divided
by n
that's it with those small changes we
have an
inverse fft that performs interpolation
just so we are super clear on what
sorcery just happened let me remind you
of the original fft implementation and
now let me show you the inverse fft
implementation
which takes the value representation as
an input
what we literally do is copy our fft
implementation
change the name of the recursive calls
to match and then
literally change one line of code one
line
and that's all there is to it so if your
mind isn't blown
you haven't been paying attention let's
take a look at what we just did
Recap
we motivated the fft through the problem
of polynomial multiplication
where the first brilliant idea came from
representing and multiplying polynomials
using the value representation
converting polynomials to a value
representation required us to come up
with an appropriate set
of evaluation points our first attempts
at solving this problem inspired the
clever idea of using positive negative
pairs
but the recursion didn't quite work
unless we expanded the domain to complex
numbers
the next brilliant idea came from using
the nth roots of unity
where the points at every level of
recursion are positive negative paired
this evaluation scheme using the roots
of unity encompassed the essence of the
fft algorithm
when confronted with the problem of
reversing the process using
interpolation
we discovered something truly astounding
the inverse fft
is the same algorithm but with one minor
adjustment
so if we take a look at what we just did
here there's not one
not two not three but four absolutely
mind-blowing ideas that come together to
make this work
do i really need to say more on why this
is my favorite algorithm
that's all for this video and thanks for
watching if you enjoyed the content
please hit the like button so that this
content will be recommended to more
people
if you want to see more content like
this please don't forget to hit the
subscribe button
and if you want to more directly support
the work of this channel please check
out the patreon page linked in the
description below
i'll see you on the next video

링크 : https://www.youtube.com/watch?v=h7apO7q16V0
