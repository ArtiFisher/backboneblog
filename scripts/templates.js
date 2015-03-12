


// window.Racoon = {
// };

// Racoon.Templates = {
// 	  	blogPost:
// 		  	'<article>
// 				<div>
// 					<a ng-href="#/post/{{article._id}}"><img ng-src="{{article.image}}"></a>
// 					<h4><a ng-href="#/post/{{article._id}}">{{article.title}}</a></h4>
// 					<div class="info">
// 						<span>{{article.date | date}}</span>
// 						<a href="#">by {{article.author}}</a>
// 						<div class="social">
// 							<ul>
// 								<li class="facebook">
// 									<span class="logo"></span>
// 									<span class="number">16</span>
// 								</li>
// 								<li class="google">
// 									<span class="logo"></span>
// 									<span class="number">7</span>
// 								</li>
// 								<li class="twitter">
// 									<span class="logo"></span>
// 									<span class="number">15</span>
// 								</li>
// 								<li class="vk">
// 									<span class="logo"></span>
// 									<span class="number">16</span>
// 								</li>
// 								<li class="yandex">
// 									<span class="logo"></span>
// 									<span class="number">0</span>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 					<p>{{article.text | preview}}</p>
// 					<button class="btn btn-default" type="button" ng-click="removePost(article)">Remove</button>
// 				</div>
// 			</article>',
// 	onePost: 
// 		'<div class="lonely">
// 			<article>
// 				<img ng-src="{{chosenPost.image}}">
// 				<input type="text" ng-model="chosenPost.title" disabled class="form-control">
// 				<div class="info">
// 					<span>{{chosenPost.date | date}}</span>
// 					<a href="#/authors">by {{chosenPost.author}}</a>
// 				</div>
// 				<textarea disabled ng-model="chosenPost.text" class="form-control"></textarea>
// 				<input type="file" image>
// 				<input type="text" ng-model="chosenPost.image" placeholder="Image URL" class="form-control">
// 				<button class="btn btn-default" type="button" ng-click="editPost()">Edit</button>
// 				<button class="btn btn-default" type="button" ng-click="updatePost()">Save</button>
// 			</article>
// 		</div>',
// 	popUp:
// 		'<div class="fader" ng-show="fillingForm"></div>
// 		<form class="create" ng-show="fillingForm" ng-submit="submitForm()">
// 			<input type="text" ng-model="author" required placeholder="Author" class="form-control">
// 			<input type="text" ng-model="title" required placeholder="Title" class="form-control">
// 			<textarea type="text" ng-model="text" required placeholder="Text" class="form-control"></textarea>
// 			<input type="text" ng-model="url" placeholder="Image URL" class="form-control">
// 			<input type="file" image>
// 			<button class="btn btn-default" type="submit">Submit</button>
// 			<button class="btn btn-default" type="button" ng-click="cancelFilling()">Cancel</button>
// 		</form>'
// };