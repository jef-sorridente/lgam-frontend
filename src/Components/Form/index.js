import "./form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="form">
        <h3 className="title">Afiliados</h3>
        <table className="form">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Graduação</th>
              <th>Localização</th>
              <th>Idade</th>
              <th>Academia</th>
            </tr>

            <tr>
              <td>Jeferson Soares</td>
              <td>2º Dan</td>
              <td>Novo Hamburgo - RS</td>
              <td>24 Anos</td>
              <td>Kim</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
