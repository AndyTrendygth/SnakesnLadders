package view;
import control.Sl_Eventhandler;
import control.Sl_Eventhandler_start;
import javafx.collections.FXCollections;
import javafx.scene.control.Button;
import javafx.scene.control.ComboBox;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundImage;
import javafx.scene.layout.BackgroundRepeat;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.VBox;
import model.Sl_spiel;

public class Sl_Start extends BorderPane {
	
	public Sl_Start() {
		init_center();
		init_top();
		//init_bg();     
	}
	
	Sl_spiel spiel = new Sl_spiel();
	Sl_Eventhandler_start ev = new Sl_Eventhandler_start(this, spiel);
	public ComboBox <Integer> cb_spieler = new ComboBox<Integer>();
	
	public void init_center() {
		//GridPane g_start = new GridPane();
		Button b_start = new Button("Spiel starten");
		b_start.setOnAction(ev);
		
		cb_spieler.getItems().add(2);
		cb_spieler.getItems().add(3);
		cb_spieler.getItems().add(4);
		
		
		VBox vb_start = new VBox();
		vb_start.getChildren().add(b_start);
		vb_start.getChildren().add(cb_spieler);
		b_start.setTranslateX(320);
		b_start.setTranslateY(0);
		cb_spieler.setTranslateX(320);
		cb_spieler.setTranslateY(10);
		this.setCenter(vb_start);
		//this.setCenter(b_start);
	}
	
	public void init_top() {
		ImageView iv = new ImageView(new Image("file:Heading v1.2.png",512,512,false, false));
		//iv.setLayoutX(800);
		//iv.setLayoutY(800);
		iv.setTranslateX(120);
		iv.setTranslateY(60);
		this.setTop(iv);
	}
	
	public void init_bg() {
		Image i = new Image("file:schlange.png", 100, 100, false, false);
	    BackgroundImage bgi = new BackgroundImage(i, BackgroundRepeat.NO_REPEAT, BackgroundRepeat.NO_REPEAT, null, null);
		Background bg =  new Background(bgi);
		this.setBackground(bg);
	}

}
