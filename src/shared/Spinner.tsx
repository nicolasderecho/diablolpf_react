const Spinner = () => (
  <div className="lds-spinner">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);

export const LazyLoadSpinner = () => (
  <div className="vertical-margin">
    <Spinner />
  </div>
);

export default Spinner;
