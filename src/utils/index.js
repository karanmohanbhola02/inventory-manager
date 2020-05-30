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

export default {
    getCardTemplatedBasesOnInventoryType
};