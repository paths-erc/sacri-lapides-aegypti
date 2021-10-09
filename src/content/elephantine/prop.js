<Row>
  {images.map((image) => (
    <Col xs={6} md={4}>
      <Img
        key={image.node.childImageSharp.fluid.src}
        fluid={image.node.childImageSharp.fluid}
        style={{ margin: "3rem 0" }}
      />
    </Col>
  ))}
</Row>;
