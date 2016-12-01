var tweetArray = [
    ["Epic", "This is the first tweet"],
    ["Hello", "World"],
    ["Batman", "Is awesome"],
    ["Yoda", "Beat Darth Sidious in Episode III"]
];

function ReloadTweets( )
{
    $( "#TweetsContainer" ).empty( );
    
    for ( var i = tweetArray.length - 1; i >= 0; i-- )
    {
        $( "#TweetsContainer" ).append( '<div class="row"><div class="col-xs-12"><div class="alert alert-success" role="alert"><strong>' + tweetArray[i][0] + '</strong> ' + tweetArray[i][1] + '</div></div></div>' );
    }
    
    $( "#TweetsContainer" ).data( "count", tweetArray.length );
}

$( document ).ready( function( )
{
    ReloadTweets( );
    
    setInterval( function( )
    {
        if ( $( "#TweetsContainer" ).data( "count" ) < tweetArray.length )
        {
            $( "#NumOfNewTweets" ).html( tweetArray.length - $( "#TweetsContainer" ).data( "count" ) );
            $( "#ReloadContainer" ).show( );
        }
    }, 3000);
    
    $( "#TweetButton" ).click( function( event )
    {
        event.preventDefault( );
        
        tweetArray.push( [$( "#TweetTitle" ).val( ), $( "#TweetBody" ).val( )] );
    } );
    
    $( "#ReloadTweets" ).click( function( )
    {
        ReloadTweets( );
        
        $( "#ReloadContainer" ).hide( );
    } );
} );