export default function Footer() {
  const styles = {
    container: {
      height: 150,
      width: "100%",
      backgroundColor: "#557A95",
      padding: 30,
    },
    text: {
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>mm2632@cornell.edu</p>
    </div>
  );
}
