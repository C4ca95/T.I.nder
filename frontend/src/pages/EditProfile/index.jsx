import React, { useState } from "react";
import { CardLogin } from "./style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../../assets/styles/global.css';

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProfileImage(image);
  };

  const handleSaveChanges = () => {
    // Lógica para salvar as alterações, incluindo profileImage
  };

  return (
    <CardLogin>
      <div className="bg">
        <div className="boxContent">
          <div className="card">
            <div className="inputBox">
              <h2>Editar Perfil</h2>
              <label className="img" htmlFor='profile-img'>
                <input type="file" id="profile-img" onChange={handleImageChange} />
              </label>
              <input type="text" className='input mb-2' placeholder='Novo Nome' name='newName'/>
              <input type="text" className='input mb-2' placeholder='Novo E-mail' name='newEmail'/>
              <input type="text" className='input mb-2' placeholder='Novo Telefone' name='newPhone'/>
              <input type="text" className='input' placeholder='Nova Senha' name='newPassword'/>
            </div>
            <Link className="forgotPassword">Esqueci minha senha</Link>
            <div className="buttonBox">
              <button className='btn-primary mb-2' onClick={handleSaveChanges}>Salvar Alterações</button>
              <button className='btn-secondary'>Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </CardLogin>
  );
};

export default EditProfile;
