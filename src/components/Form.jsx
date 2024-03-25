import { Button, Card, Form, Input} from 'antd';
import { useState } from 'react';






export default function Requisitos() {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState([]);
  
  const handleOnSave = () => {
    form.validateFields().then((values) => {
      console.log(values);
      setFormValues([...formValues, values]);
      form.resetFields();
    });
  };

  return (
    <div style={{display:"flex", 
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: 'pink',}}>

      
      <div style={{ maxWidth: 600,
       }}>
        
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
            style: { fontWeight: 'bold' }
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >


          <Card
          title="Formulario de solicitud"
          bordered={false}
          style={{width: 500,
            margin:80}}
             >

          

          <Form.Item
            label="Nombres"
            name="NOMBRES"
            rules={[
              {
                required: true,
                message: 'Este campo es obligatorio',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Apellidos"
            name="APELLIDOS"
            rules={[
              {
                required: true,
                message: 'Este campo es obligatorio',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Sobre usted"
            name="motivo"
            
            rules={[
              {
                required: true,
                message: 'Rellene este campo por favor',
              },
            ]}
          >
             <Input.TextArea placeholder="Cuentenos con qué cuenta para cuidar a una mascota" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button style={{backgroundColor: 'pink', color: "black"}} type="primary" onClick={handleOnSave}>
              Enviar
            </Button>
          </Form.Item>

          </Card>   
        </Form>


 


        <div>
          
          {formValues.map((value, index) => (
            <div key={index}>
              <Card
              title='Formulario enviado!' 
              bordered={false}
              style={{width:500, 
                      margin: 80}}
              >
              <h3> Numero de formulario: {index + 1}</h3>
              <p>Nombre: {value.NOMBRES}</p>
              <p>Apellidos: {value.APELLIDOS}</p>
              <p>Sobre el postulante: {value.motivo}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
