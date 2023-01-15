function solution(quiz) {
    return quiz.map(v => {
        const [expression, result] = v.split(' = ');
        const operator = expression.includes('+') ? 1 : -1;
        const [operand1, operand2] = expression.split(operator === 1 ? ' + ' : ' - ');

        return +operand1 + (+operand2 * operator) === +result ? 'O' : 'X';
    });
}