import * as React from "react";
import cn         from "classnames";

import { ImmutableMap }    from "../../interfaces";
import { IAdoptedDogFull } from "../../../../interfaces/adapters/ui/dog/full";
import styles              from "./styles.less";

export type IProps = {
  dog: ImmutableMap<IAdoptedDogFull>
}

export class Dog extends React.PureComponent<IProps & React.HTMLAttributes<HTMLDivElement>> {
  render() {
    const {className = "", dog, ...rest} = this.props,
      id = dog.get("id"),
      name = dog.get("name"),
      description = dog.get("description"),
      isGoodBoy = dog.get("isGoodBoy"),
      image = dog.get("image")
    ;
    return (
      <div className={cn(styles.wrapper, className)} {...rest}>
        id: { id }<br/>
        name: { name }<br/>
        description: { description }<br/>
        isGoodBoy: { isGoodBoy ? "ДА" : "НЕТ"}<br/>
        image: <img src={image} className={styles.img}/>
      </div>
    )
  }
}
