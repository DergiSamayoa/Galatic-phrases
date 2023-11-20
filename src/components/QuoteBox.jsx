import "./styles/QuoteBox.css"

const QuoteBox = ( {quote, handleChangeQuote} ) => {
    console.log(quote)
    const {phrase, author} = quote
  return (
    <article className="quotebox">
        <h1 className="quotebox__title">INFOGALAX</h1>
        <div className="quotebox__box">
            <p>{phrase}</p>
        </div>
        <button className="quotebox__btn" onClick={handleChangeQuote}>
            <img src="/images/button.svg" alt="" />
        </button>
        {/* <div className="quotebox__planet"></div> */}
        <span className="quotebox__author">
            {author}
        </span>
    </article>
  )
}
export default QuoteBox