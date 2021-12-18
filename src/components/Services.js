import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Our product" img="picture2.png" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Biodegradable Bags" img="card2.png" text="We provide biodegradable bags all over Sweden. Contact us at contact@love4nature.se for information about prices and ordering. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Our Logo, Our Pride" img="picture1.png"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
