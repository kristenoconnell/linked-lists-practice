const LinkedList = require("./linkedList");
const linkedList = new LinkedList();

linkedList.insertAtHead("One");
linkedList.insertAtHead(2);

linkedList.insert(1.5, (node) => node.value === "One");

console.log(linkedList);

/*linkedList.find((node) => node.value === 1).value = "One";

console.log(linkedList);

console.log(
    "find 2",
    linkedList.find((node) => node.value === 2).next
);

console.log(
    "find 3",
    linkedList.find((node) => node.value === 3)
    );*/