const getCardTemplatedBasesOnInventoryType = (inventoryTypes, inventoryType) => {
    let inventoryTemplate = null;
    const inventoryTypeForTemplate = inventoryTypes.find((invType) => invType.type === inventoryType.name && invType.id === inventoryType.id);
    if(inventoryTypeForTemplate) {
        const fieldsData = inventoryTypeForTemplate.fields.map((field) => {
            return {
                displayName: field.fieldName,
                key: field.key,
                value: ''
            };
        });
        inventoryTemplate = {
            id: `${inventoryTypeForTemplate.type}_${Math.random()}`,
            inventoryTypeId: inventoryTypeForTemplate.id,
            titleKey: inventoryTypeForTemplate.titleKey,
            type: inventoryTypeForTemplate.type,
            fieldsData
        };
    }
    return inventoryTemplate;
};

const getInventoryTypeCardTemplate = () => {
    const inventoryTypeTemplate = {
        id: `inventoryType_${Math.floor(1000000000 + Math.random() * 900000)}`,
        type: "",
        titleKey: "title",
        fields: [
            {
                fieldName: "Title",
                key: "title",
                fieldType: "smallText"
            }
        ]
    };
    return inventoryTypeTemplate;
};

export default {
    getCardTemplatedBasesOnInventoryType,
    getInventoryTypeCardTemplate
};