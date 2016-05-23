import React, {Component} from 'react';
import FlexFrame from 'components/FlexFrame';
import styles from './index.less';

class Main extends Component {
  render() {
		return (
			<FlexFrame {...this.props} flow="column nowrap" className={styles.content}>
		    <h1>This is a Content Frame</h1>
		    <h4>It grows to fill, it is T-B, it is a scroll. </h4>
		    <blockquote>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</blockquote>
		    <p>
		    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet rhoncus diam. Quisque vulputate, odio vel iaculis pulvinar, neque sapien hendrerit justo, sit amet pulvinar ex tortor sed velit. Ut malesuada ipsum ac mattis ultricies. Donec mollis, enim vitae tristique egestas, enim turpis venenatis nunc, at volutpat lorem urna efficitur nibh. Nulla nec lacinia nisl. Donec sodales dignissim tellus, a bibendum leo ornare at. Nulla feugiat dui eu lorem tristique, eget dictum neque scelerisque. Proin et mi sollicitudin neque facilisis ullamcorper. Nunc faucibus feugiat eros a porta.
		    </p>
		    <p>
		    Cras ex nisi, hendrerit at dolor id, tincidunt suscipit nulla. Morbi vitae pellentesque massa. Cras eget pretium enim. Maecenas venenatis quam accumsan dapibus interdum. Suspendisse potenti. Sed varius erat est, ac gravida turpis auctor ut. Pellentesque placerat, felis vitae pulvinar bibendum, elit est suscipit magna, nec cursus nisl nisl vel magna. Nunc a posuere nunc. Aenean lobortis luctus mauris eu gravida. Aliquam cursus, neque nec venenatis auctor, nisi sapien blandit felis, vel porta sem sem aliquet tortor. Integer maximus mi elit, ut tristique sapien fermentum a.
		    </p>
		    <p>
		    Proin arcu sapien, rutrum quis sapien a, malesuada gravida massa. Curabitur tortor massa, lacinia at pretium ut, mattis sit amet ante. Donec facilisis pulvinar elit eu commodo. Etiam ornare mauris et lectus sagittis, ac finibus mi scelerisque. Morbi lobortis volutpat nibh in finibus. Suspendisse et sagittis tortor, egestas feugiat mauris. Donec mauris est, bibendum consectetur vestibulum id, hendrerit eget lectus. Nunc hendrerit nibh et est semper eleifend. Donec posuere placerat tortor at imperdiet. In ut purus vitae massa fermentum gravida eget et purus. Donec dapibus, nisi eu malesuada luctus, turpis turpis interdum justo, ac dignissim est elit sed velit. Cras consequat nunc massa, sit amet maximus eros interdum quis. Praesent ut augue ut quam blandit facilisis pretium ac ante. Aliquam erat volutpat. Vivamus hendrerit ipsum vel mi sollicitudin, ac mollis quam egestas.
		    </p>
		    <p>
		    Aenean tincidunt convallis orci id vestibulum. Sed sed nisl id nibh varius condimentum. Sed tristique at arcu non imperdiet. Curabitur tincidunt diam in ligula lobortis sodales. Proin placerat eu metus ac consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quis purus eu eros tincidunt blandit sit amet vitae nibh. Fusce faucibus arcu at est placerat imperdiet. Morbi enim tellus, posuere ut sem a, tincidunt finibus urna. Sed bibendum, orci quis luctus ullamcorper, arcu enim dictum arcu, vitae placerat nunc dui sit amet enim. Suspendisse rutrum velit ac diam hendrerit euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eleifend sapien ut venenatis tempus.
		    </p>
		    <p>
		    Donec fringilla quam ac tellus suscipit hendrerit. Cras convallis odio quis egestas auctor. Sed luctus est nisi, nec rutrum lorem ullamcorper eget. Pellentesque pretium risus eget dictum aliquet. Etiam tempor augue a tempor rutrum. Nullam fermentum finibus est quis varius. Sed ultricies mauris non lobortis aliquam. Ut in velit fringilla, lacinia nisi eu, posuere ex. Quisque id dui ac lectus volutpat ullamcorper vel nec enim.
		    </p>
	   </FlexFrame>
		);
	}
}

export default Main;


