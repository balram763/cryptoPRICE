import {
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerUser } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name.trim() || !email.trim() || !password.trim() || !password2.trim()) {
      alert("All fields are required!");
      return;
    }

    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(registerUser(formData));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h3" align="center">
        Create An Account
      </Typography>
      <Card>
        <CardContent>
          <form onSubmit={handleRegister}>
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Name"
              type="text"
              onChange={handleChange}
              fullWidth
              name="name"
              value={name}
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Email"
              type="email"
              fullWidth
              onChange={handleChange}
              name="email"
              value={email}
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Enter Password"
              type="password"
              fullWidth
              onChange={handleChange}
              name="password"
              value={password}
            />
            <TextField
              sx={{ margin: "10px 0px" }}
              variant="outlined"
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              fullWidth
              name="password2"
              value={password2}
            />
            <Button type="submit" variant="contained" color="success" fullWidth>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;
