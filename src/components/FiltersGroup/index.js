import {Component} from 'react'
import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class FiltersGroup extends Component {
  getInputWord = event => {
    const {applyTextAndMakeAPICall} = this.props
    let word = event.target.value
    if (event.key === 'Enter') {
      applyTextAndMakeAPICall(word)
      word = ''
    }
  }

  getCategoryId = event => {
    const {applyCategoryAndMakeAPICall} = this.props
    applyCategoryAndMakeAPICall(event.target.id)
  }

  getRatingId = event => {
    const {applyRatingAndMakeAPICall} = this.props
    applyRatingAndMakeAPICall(event.target.id)
  }

  onClickClearFilters = () => {
    const {clearFilters} = this.props
    clearFilters()
  }

  render() {
    return (
      <div className="filters-group-container">
        <input
          type="search"
          placeholder="search"
          onKeyDown={this.getInputWord}
        />
        <h2>Category</h2>
        <div>
          {categoryOptions.map(each => (
            <p id={each.categoryId} onClick={this.getCategoryId}>
              {each.name}
            </p>
          ))}
        </div>
        <h2>Rating</h2>
        <div>
          {ratingsList.map(each => (
            <button
              type="button"
              className="each-rating-container"
              id={each.ratingId}
              onClick={this.getRatingId}
            >
              <img
                src={each.imageUrl}
                alt="rating {ratingId}"
                className="rating-image"
                id={each.ratingId}
              />
              <p id={each.ratingId}>&up</p>
            </button>
          ))}
        </div>
        <button type="button" onClick={this.onClickClearFilters}>
          Clear Filters
        </button>
      </div>
    )
  }
}

export default FiltersGroup
