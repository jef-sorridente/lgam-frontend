import "./form.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const filiados = [
    {
      id: uuidv4(),
      nome: "Jeferson Soares",
      graduacao: "2°Dan",
      estado: "RS",
      idade: 24,
      academia: "Kim Yu Shin",
    },
    {
      id: uuidv4(),
      nome: "Jeferson Soares",
      graduacao: "2°Dan",
      estado: "RS",
      idade: 24,
      academia: "Kim Yu Shin",
    },
    {
      id: uuidv4(),
      nome: "Jeferson Soares",
      graduacao: "2°Dan",
      estado: "RS",
      idade: 24,
      academia: "Kim Yu Shin",
    },
  ];

  return (
    <div className="container">
      <div className="form">
        <h3 className="title">Afiliados</h3>
        <table className="form">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Graduação</th>
              <th>Idade</th>
              <th>Academia</th>
            </tr>
            {filiados.map((filiado) => (
              <tr key={filiado.id}>
                <td>{filiado.nome}</td>
                <td>{filiado.graduacao}</td>
                <td>{filiado.idade}</td>
                <td>{filiado.academia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
