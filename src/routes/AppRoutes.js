import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoMatch from '../components/NoMatch'
import ProductListClass from "../components/ProductList/ProductListClass";
import ProductDetailClass from "../components/ProductDetails/ProductDetailClass";
import RandomImageClass from "../components/RandomImageClass/RandomImageClass";
import DogImageByBreed from "../components/DogImageByBreed/DogImageByBreedClass";
import DogsByBreed from "../components/DogsByBreed/DogsByBreed";
import UserProfile from "../components/UserProfileClass/UserProfileClass";
import MyComponent from "../components/UserProfileClass/MyComponent";
import DogBreedList from "../components/DogBreedListClass/DogBreedListClass";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/productDetails' exact component={ProductListClass} />
                <Route path='/productDetails/:id' component={ProductDetailClass} />
                <Route path='/user-profile' component={UserProfile} />
                <Route path='/random-dog-image' component={RandomImageClass} />
                <Route path='/dogbybreed' component={DogImageByBreed} />
                <Route path='/breed/images' component={DogsByBreed} />
                <Route path='/random-user' component={MyComponent} />
                <Route path='/breedlist' component={DogBreedList} />
                <Route path='*' component={NoMatch} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes