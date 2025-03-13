// code your solution here
function saturdayFun (venture = 'roller-skate') {
    return `This Saturday, I want to ${venture}!`;
}
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(proper = "*") {
    return function (adjective = 'special') {
        return `You are ${proper}${adjective}${proper}!`;
    }
}