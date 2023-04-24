// login modal
import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const LoginForm = () => {
  const [isShowing, setIsShowing] = useState(false)

  const toogle = () => {
    setIsShowing(!isShowing)
  }
  return generateLoginForm()
}

const generateLoginForm = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="login-input-email">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="user@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="login-input-password">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="password"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="login-input-remember">
                <Form.Check
                  value="remembered"
                  label="Remember me"
                  type="checkbox"
                ></Form.Check>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <div>
              <Button variant="primary" onClick={handleClose}>
                Login
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}

export default LoginForm
