import React from 'react';
import { getFunName } from './../helpers';

class StorePicker extends React.Component {
    go2Store(event) {
      event.preventDefault();
      const storeId = this.storeInput.value;

      this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.go2Store(e)}>
                <h2>Enter a Store</h2>
                <input type="text" required placeholder="Store Name"
                  defaultValue={getFunName()}
                  ref={(input) => this.storeInput = input }/>
                <button type="submit">Visit Store -></button>
            </form>

        )
    }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}


export default StorePicker
