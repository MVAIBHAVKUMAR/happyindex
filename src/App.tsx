import React from "react";
import Quiz from "./components/Quiz";
import { Col, Container, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/quiz"
                  element={
                    <ProtectedRoute>
                      <Quiz />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Quiz />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
