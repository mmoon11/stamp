import { Card, CardActionArea, CardContent, Chip, Rating } from "@mui/material";

export default function ItemCard({ result, setSearchTerm }: any) {
  const status = result.is_closed === false ? "Closed" : "Open";

  const styles = {
    img: {
      width: 200,
      height: 200,
      objectFit: "cover",
      borderTopLeftRadius: 7,
      borderBottomLeftRadius: 7,
    },
    cardContainer: {
      display: "flex",
      alignItems: "center",
    },
    textContainer: {
      paddingLeft: 20,
      width: "55%",
    },
    title: {
      fontSize: 24,
      marginBottom: "2%",
      color: "black",
    },
    ratingContainer: {
      display: "flex",
      alignItems: "center",
      gap: "5%",
    },
    chipsContainer: {
      display: "flex",
      alignItems: "center",
    },
    closed: {
      color: "red",
      marginTop: "5%",
      fontSize: 14,
    },
    open: {
      color: "dark green",
      marginTop: "3%",
      fontSize: 14,
    },
  };

  const statusStyle = result.is_closed === false ? styles.closed : styles.open;
  const outdoor = result.transactions.includes("outdoorseating");

  return (
    <Card
      sx={{ width: "47%", marginBottom: "3%", borderRadius: 2, boxShadow: 5 }}
    >
      <CardActionArea>
        <CardContent>
          <div style={styles.cardContainer}>
            <img src={result.image_url} alt="" style={styles.img} />
            <div style={styles.textContainer}>
              <p style={styles.title}>{result.name}</p>
              <div style={styles.ratingContainer}>
                <Rating value={result.rating} readOnly />
                <p style={{ color: "black" }}>({result.review_count})</p>
              </div>
              <div style={styles.chipsContainer}>
                <ul
                  style={{
                    width: "60%",
                  }}
                >
                  {result.categories.map((category, index) => (
                    <Chip
                      key={index}
                      label={category.title}
                      size="small"
                      style={{
                        fontSize: 12,
                        fontFamily: "Optima, serif",
                        marginRight: "2%",
                        marginTop: "2%",
                      }}
                      onClick={() => {
                        setSearchTerm(category.title);
                      }}
                    />
                  ))}
                </ul>
                <p style={{ marginLeft: "3%", color: "black", fontSize: 16 }}>
                  {result.price}
                </p>
              </div>
              <p style={statusStyle}>{status}</p>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
