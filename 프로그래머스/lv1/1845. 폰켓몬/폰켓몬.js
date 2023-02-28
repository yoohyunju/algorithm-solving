function solution(nums) {
    const num = Math.floor(nums.length / 2);
    const set = new Set(nums);
    
    return set.size > num ? num : set.size;
}