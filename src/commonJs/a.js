let a = 1;
exports.a = a;

exports.b = function() {
    a = a + 1;
};

function User() {
    this.a = a + 1;
}

exports.c = new User();
