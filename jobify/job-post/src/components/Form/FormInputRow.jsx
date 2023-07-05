const { Container, Label, Input } = require("./FormInputRow.styles");

const FormInputRow = ({ name, onChange, type }) => {
  return (
    <Container>
      <Label htmlFor={name}>{name}</Label>
      <Input onChange={onChange} type={type} name={name} />
    </Container>
  );
};

export default FormInputRow;
