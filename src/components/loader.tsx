import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = () => {
//   const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
//   `;

  return (
    <PropagateLoader
      color={`#888888`}
      css={" display: block; margin:0 auto"}
      loading={true}
      size={150}
    />
  );
};

export default Loader;
