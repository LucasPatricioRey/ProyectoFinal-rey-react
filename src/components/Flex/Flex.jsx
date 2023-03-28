function Flex(props) {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", justifyItems: "center", gap: "2rem"}}>{props.children}</div>
}

export default Flex;