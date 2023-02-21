const createGroupTemplate = `
    <div>
        <div>
            <strong>Identificación: </strong>
            <span>${req.body.id}</span>
        </div>
        <div>
            <strong>Teléfono: </strong>
            <span>${req.body.phone}</span>
        </div>
        <div>
            <strong>País: </strong>
            <span>${req.body.country}</span>
        </div>
        <div>
            <strong>Motivo: </strong>
            <span>${req.body.reason}</span>
        </div>
        <div>
            <strong>Cómo se enteró: </strong>
            <span>${req.body.findOut}</span>
        </div>
    </div>
`;

module.exports = {
  createGroupTemplate,
};
