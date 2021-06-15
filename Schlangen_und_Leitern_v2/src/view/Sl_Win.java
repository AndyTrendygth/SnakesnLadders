package view;

import control.Sl_Eventhandler_win;
import javafx.geometry.Pos;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundImage;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;

public class Sl_Win extends BorderPane{

	public Sl_Win() {
		init_bg();
		init();
	}
	Sl_Eventhandler_win sw = new Sl_Eventhandler_win();
	
	public void init() {
		VBox vb = new VBox();
		Label l_win = new Label("gewonnen");
		Button b_win = new Button("Nochmal spielen");
		b_win.setOnAction(sw);
		Button b_quit = new Button("Beenden");
		b_quit.setOnAction(sw);
		vb.getChildren().add(b_win);
		vb.getChildren().add(b_quit);
		vb.setAlignment(Pos.CENTER);
		this.setCenter(vb);
	}
	
	public void init_bg() {
		Image i = new Image("file:win.png",1536,864,true,false);
	    BackgroundImage bgi = new BackgroundImage(i, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, null, null);
		Background bg =  new Background(bgi);
		this.setBackground(bg);
	}
}
