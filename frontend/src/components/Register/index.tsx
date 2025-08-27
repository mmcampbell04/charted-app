import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form";
import { Input } from "../Input";
import styles from "./styles.module.css";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      navigate("/login");
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Create Account</h1>

        <Form
          onSubmit={handleSubmit}
          submitText="Create Account"
          isLoading={loading}
        >
          <Input label="Name" type="text" name="name" />
          <Input label="Email" type="email" name="email" required />
          <Input label="Password" type="password" name="password" required />
          <Input
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required
          />
        </Form>

        <div>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
