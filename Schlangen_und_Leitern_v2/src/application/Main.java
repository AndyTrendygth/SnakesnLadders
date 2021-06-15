package application;
	
import javafx.application.Application;
import javafx.stage.Stage;
import view.Sl_Pane;
import view.Sl_Start;
import view.Sl_Win;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.layout.BorderPane;


public class Main extends Application {
	
	@Override
	public void start(Stage window) {
		try {
			Sl_Start root_start = new Sl_Start();
			Sl_Win root_win = new Sl_Win();
			//Sl_Pane root_game = new Sl_Pane();
			Scene scene_start = new Scene(root_start,700,700);
			//Scene scene_game = new Scene(root_game,800,800);
			scene_start.getStylesheets().add(getClass().getResource("application.css").toExternalForm());
			window.setScene(scene_start);
			window.show();
			window.setTitle("Schlangen und Leitern");
			window.getIcons().add(new Image("file:Logo.png"));
		    //window.setMaximized(true);
		 //   window.getIcons().add(new Image("file:icon.png"));
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) {
		launch(args);
	}
}
