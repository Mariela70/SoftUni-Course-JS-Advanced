function solve(nums) {
    const odd = nums.filter((x, i) => i % 2 != 0);
    const doubled = odd.map(x => x * 2);
    doubled.reverse();

    console.log(doubled.join(' '));
}
solve([10, 15, 20, 25]);