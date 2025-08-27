import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../Form";
import { Input } from "../Input";
import styles from "./styles.module.css";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      navigate("/dashboard");
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Sign In</h1>

        <Form onSubmit={handleSubmit} submitText="Sign In" isLoading={loading}>
          <Input label="Email" type="email" name="email" required />

          <Input label="Password" type="password" name="password" required />
        </Form>

        <div>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
