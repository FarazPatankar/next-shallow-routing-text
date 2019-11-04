import 'styles/index.css';

const ModalContainer = ({ children }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-smoke md:py-16">
    <div className="table h-full w-full">
      <div className="table-cell align-middle py-4">
        <div className="bg-white text-black m-auto relative rounded-lg max-w-sm md:max-w-md lg:max-w-6xl">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default ModalContainer;
