const createGroupTemplate = (data) => {
  const { id, name, phone, country, reason, findOut } = data;
  return `
    <div>
        <div>
            <strong>Identificación: </strong>
            <span>${id}</span>
        </div>
        <div>
            <strong>Nombre: </strong>
            <span>${name}</span>
        </div>
        <div>
            <strong>Teléfono: </strong>
            <span>${phone}</span>
        </div>
        <div>
            <strong>País: </strong>
            <span>${country}</span>
        </div>
        <div>
            <strong>Motivo: </strong>
            <span>${reason}</span>
        </div>
        <div>
            <strong>Cómo se enteró: </strong>
            <span>${findOut}</span>
        </div>
    </div>
`;
};

module.exports = {
  createGroupTemplate,
};
