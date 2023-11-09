import { Result } from "../Interfacce/Risorse";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Notizie = () => {
  const [result, setArticle] = useState<Result[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          console.log("ecco", res);
          return res.json();
        }
      })
      .then((result) => {
        console.log(result);
        setArticle(result.results);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  }, []);
  return (
    <Container>
      <Row>
        {result.map((r) => {
          return (
            <Col md={7} key={r.id}>
              <Card className="mb-4 mt-2">
                <Card.Img variant="top" src={r.image_url} />
                <Card.Body>
                  <Card.Title>{r.title}</Card.Title>
                  <Card.Text></Card.Text>
                  <Button variant="primary" className="align-items-center">
                    Dettagli
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Notizie;
