package model;

public class Sl_Spieler {

	String name; 
	int akt_feld;
	
	public Sl_Spieler(String name, int akt_feld) {
		setName(name);
		setAkt_feld(akt_feld);
	}
	
	public Sl_Spieler() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAkt_feld() {
		return akt_feld;
	}

	public void setAkt_feld(int akt_feld) {
		this.akt_feld = akt_feld;
	}
	
	
	
}
