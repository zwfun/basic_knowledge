export let a = 1;
export const b = function() {
    a = a + 1;
};

function User() {
    console.log('user===', a);
    this.a = a + 1;
}

export const c = new User();
