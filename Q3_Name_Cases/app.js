var personName = "maria Tasleem";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (abc) { return abc.toUpperCase(); }));
