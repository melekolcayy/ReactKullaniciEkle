import React,{Component} from 'react';

class AddUser extends Component {
    state={
        name:"",
        email:""
    };
    onNameChange(e){
this.setState({
    [e.target.name]: e.target.value
});
    }
    onEmailChange(e){
        this.setState({
        [e.target.name]: e.target.value
    });
 }
  onAddSubmit(e){
      const {addUser}=this.props;
      const {name,email}=this.state;

      const newUser={
          id:Math.random(),
          name:name,
          email:email
      };
      addUser(newUser);
        e.preventDefault();
    }
    
    render(){
        const {name, email}=this.state;
    return (
        <div className="card">
        <h4 className="card-header">Yeni Kullanıcı Ekle</h4>
        <div className="card-body">
            <form onSubmit={this.onAddSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name">İsim</label>
                    <input type="text" name="name" id="name" placeholder="İsmini Gir" className="form-control" value={name}
                        onChange={this.onNameChange.bind(this)}
                    />


                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Emailini Gir" className="form-control" value={email}
                        onChange={this.onEmailChange.bind(this)}
                    />


                </div>
                <button type="submit" className="btn btn-danger btn-block">Ekle</button>

            </form>
        </div>
        </div>
    );
}
}
export default AddUser;
