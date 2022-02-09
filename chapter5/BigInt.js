const limit = Number.MAX_SAFE_INTEGER;
limit +1;
limit +2;//exceed MAX_SAFE_INTEGER +1
console.log(limit);

const big = BigInt("9007199254740991");//init as string
big +1n;
console.log(big);   