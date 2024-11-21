const listItem = [
    {
      name: "scope1", item: ["item1.1", "item1.2", "item1.3"]
    },
    {
      name: "scope2", item: ["item2.1", "item2.2", "item2.3"]
    }
  ]

 export let formattedItems = listItem.map((scope, index) => {
    let formattedScope = `${index + 1}. ${scope.name}\n`;
    scope.item.forEach(item => {
      formattedScope += `- ${item}\n`;
    });
    return formattedScope;
  }).join("\n");