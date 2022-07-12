import { Component } from "react";
import {
  DashboardMainContainer,
  DispenserContainer,
  RefillSectionContainer,
  ReportSectionContainer,
  Button,
  ButtonContainer,
  BoldText
} from "./styledComponents";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "Strong Coffee",
      quatity: 0,
      withSugar: false,
      teaLeaveQuantity: 0,
      coffeePowderQuantity: 0,
      sugarQuantity: 0,
      milkQuantity: 0,
      waterQuantity: 0,
      teaLeavesConsumed: 0,
      coffeePowderConsumed: 0,
      sugarConsumed: 0,
      milkConsumed: 0,
      waterConsumed: 0,
      teaLeavesRemained: 500,
      coffeePowderRemained: 500,
      sugarRemained: 600,
      milkRemained: 8000,
      waterRemained: 15000,
      strongCoffeeCups: 0,
      strongTeaCups: 0,
      lightTeaCups: 0,
      lightCoffeCups: 0
    };
  }

  onChangeSelectItem = (event) => {
    this.setState({
      selectedItem: event.target.value
    });
  };

  onChangeQuantity = (event) => {
    this.setState({
      quantity: event.target.value
    });
  };

  onToggleSugar = () => {
    const { withSugar } = this.state;
    this.setState({
      withSugar: !withSugar
    });
  };

  onClickDispense = () => {
    const { selectedItem, quantity, withSugar } = this.state;

    // 50, T = 1
    // 50, C=2
    // 50  S=1.5
    // 4000 M=0.15
    // 600 W =0.02
    if (selectedItem === "strongCoffee") {
      // 2,50,4,0,100,
      // sugar,milk,coffee,tea,water
      this.setState({});
    } else if (selectedItem === "strongTea") {
    } else if (selectedItem === "lightCoffee") {
    } else if (selectedItem === "lightTea") {
    }
  };

  onClearDispenseSelection = () => {
    this.setState({
      selectedItem: "strongCoffe",
      quantity: 0,
      withSugar: false
    });
  };

  render() {
    const {
      selectedItem,
      quantity,
      withSugar,
      teaLeaveQuantity,
      coffeePowderQuantity,
      sugarQuantity,
      milkQuantity,
      waterQuantity,
      strongCoffeeCups,
      strongTeaCups,
      lightTeaCups,
      lightCoffeCups,

      teaLeavesConsumed,
      coffeePowderConsumed,
      sugarConsumed,
      milkConsumed,
      waterConsumed,
      teaLeavesRemained,
      coffeePowderRemained,
      sugarRemained,
      milkRemained,
      waterRemained
    } = this.state;
    // console.log(selectedItem, quantity, withSugar);
    return (
      <DashboardMainContainer>
        <h1>Tea / Coffe Vending Machine</h1>

        <DispenserContainer>
          <h1>Dispense</h1>
          <div>
            <label>Select Item</label>
            <select selected={selectedItem} onChange={this.onChangeSelectItem}>
              <option value={"strongCoffee"}>Strong Coffe</option>
              <option value={"lightCoffee"}>Light Coffee</option>
              <option value={"strongTea"}>Strong Tea</option>
              <option value={"lightTea"}>Light Tea</option>
            </select>
          </div>
          <div>
            <label>Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={this.onChangeQuantity}
            />
          </div>
          <div>
            <input
              id="withSugar"
              type="checkbox"
              onChange={this.onToggleSugar}
              value={withSugar}
            />
            <label htmlFor="withSugar">With Sugar</label>
          </div>
          <ButtonContainer>
            <Button onClick={this.onClickDispense}>Dispense</Button>
            <Button onClick={this.onClearDispenseSelection}>Clear</Button>
          </ButtonContainer>
        </DispenserContainer>
        <RefillSectionContainer>
          <h1>Stock Refill Section</h1>
          <div>
            <label>Tea Leaves Quantity</label>
            <input type="text" value={teaLeaveQuantity} />
          </div>

          <div>
            <label>Coffee Powder Quantity</label>
            <input type="text" value={coffeePowderQuantity} />
          </div>

          <div>
            <label>Sugar Quantity</label>
            <input type="text" value={sugarQuantity} />
          </div>

          <div>
            <label>Milk Quantity</label>
            <input type="text" value={milkQuantity} />
          </div>
          <div>
            <label>Water Quantity</label>
            <input type="text" value={waterQuantity} />
          </div>
          <div>
            <Button>Dispense</Button>
            <Button>Clear</Button>
          </div>
        </RefillSectionContainer>

        <ReportSectionContainer>
          <h1>Stock Report Container</h1>
          <div>
            <BoldText>Stock Consumed</BoldText>
            <p>
              Tea Leaves<BoldText>{teaLeavesConsumed}</BoldText>
            </p>
            <p>
              Coffe Powder<BoldText>{coffeePowderConsumed}</BoldText>
            </p>

            <p>
              Sugar<BoldText>{sugarConsumed}</BoldText>
            </p>
            <p>
              Milk<BoldText>{milkConsumed}</BoldText>
            </p>
            <p>
              Water<BoldText>{waterConsumed}</BoldText>
            </p>
          </div>
          <div>
            <BoldText>Stock Remaining</BoldText>
            <p>
              Tea Leaves<BoldText>{teaLeavesRemained}</BoldText>
            </p>
            <p>
              Coffe Powder<BoldText>{coffeePowderRemained}</BoldText>
            </p>

            <p>
              Sugar<BoldText>{sugarRemained}</BoldText>
            </p>
            <p>
              Milk<BoldText>{milkRemained}</BoldText>
            </p>
            <p>
              Water<BoldText>{waterRemained}</BoldText>
            </p>
          </div>

          <div>
            <BoldText>Leakage Informatoin</BoldText>
            <p>
              Milk <BoldText>{milkQuantity}</BoldText>
            </p>
            <p>
              Water <BoldText>{waterQuantity}</BoldText>
            </p>
          </div>

          <div>
            <BoldText>Bevarage Details</BoldText>
            <p>
              No of strong Coffee cups Despensed
              <BoldText>{strongCoffeeCups}</BoldText>
            </p>
            <p>
              No of Light coffee cups Despensed
              <BoldText>{lightCoffeCups}</BoldText>
            </p>
            <p>
              No of Strong Tea cups Despensed
              <BoldText>{strongTeaCups}</BoldText>
            </p>
            <p>
              No of Light Tea cups Despensed<BoldText>{lightTeaCups}</BoldText>
            </p>
            <p>
              Selling Price <BoldText></BoldText>
            </p>
          </div>
        </ReportSectionContainer>
      </DashboardMainContainer>
    );
  }
}

export default Dashboard;
